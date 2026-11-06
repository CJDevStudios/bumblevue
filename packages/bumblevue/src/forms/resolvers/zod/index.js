import { isNotEmpty } from '@cjdevstudios/bumbleuix-utils';
import { z } from 'zod/v4';
import { toValues } from '../utils';

export const zodResolver =
    (schema, schemaOptions, resolverOptions) =>
    async ({ values, name }) => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'parse' : 'parseAsync'](values, schemaOptions);

            return {
                values: toValues(raw ? values : result, name),
                errors: {}
            };
        } catch (e) {
            if (Array.isArray(e?.issues || e?.errors)) {
                return {
                    values: toValues(raw ? values : undefined, name),
                    errors: (e.issues || e.errors).reduce((acc, error) => {
                        const pathKey = isNotEmpty(error.path) ? z.core.toDotPath(error.path) : name;

                        if (pathKey) {
                            acc[pathKey] ||= [];
                            acc[pathKey].push(error);
                        }

                        return acc;
                    }, {})
                };
            }

            throw e;
        }
    };
