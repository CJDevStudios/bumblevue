import { isEmpty } from '@cjdevstudios/bumblevue/utils';
import { toValues } from '../utils';

export const yupResolver =
    (schema, schemaOptions, resolverOptions) =>
    async ({ values, name }) => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'validateSync' : 'validate'](values, { abortEarly: false, ...schemaOptions });

            return {
                values: toValues(raw ? values : result, name),
                errors: {}
            };
        } catch (e) {
            if (e?.inner) {
                return {
                    values: toValues(raw ? values : undefined, name),
                    errors: e.inner.reduce((acc, error) => {
                        const pathKey = !isEmpty(error.path) ? error.path : name;

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
