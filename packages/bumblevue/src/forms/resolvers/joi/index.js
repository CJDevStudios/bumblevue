import { isNotEmpty } from '@cjdevstudios/bumbleuix-utils';
import { toValues } from '../utils';

export const joiResolver =
    (schema, schemaOptions, resolverOptions) =>
    async ({ values, name }) => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'validate' : 'validateAsync'](values, { abortEarly: false, ...schemaOptions });

            return {
                values: toValues(raw ? values : result, name),
                errors: {}
            };
        } catch (e) {
            if (e?.details) {
                return {
                    values: toValues(raw ? values : undefined, name),
                    errors: e.details.reduce((acc, error) => {
                        const pathKey = isNotEmpty(error.path) ? error.path.join('.') : name;

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
