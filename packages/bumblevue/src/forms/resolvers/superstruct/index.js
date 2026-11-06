import { isNotEmpty } from '@cjdevstudios/bumbleuix-utils';
import { toValues } from '../utils';

export const superStructResolver =
    (schema, schemaOptions, resolverOptions) =>
    async ({ values, name }) => {
        const { raw = false } = resolverOptions || {};

        const [errors, data] = schema.validate(values, schemaOptions);

        if (errors) {
            return {
                values: toValues(undefined, name),
                errors: errors.failures().reduce((acc, error) => {
                    const pathKey = isNotEmpty(error.path) ? error.path.join('.') : name;

                    if (pathKey) {
                        acc[pathKey] ||= [];
                        acc[pathKey].push(error);
                    }

                    return acc;
                }, {})
            };
        }

        return {
            values: toValues(raw ? values : data, name),
            errors: {}
        };
    };
