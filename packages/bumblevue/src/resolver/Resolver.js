import { components, directives } from './Metadata';

export * from './Metadata';

export function BumbleVueResolver(options = {}) {
    const getName = (name, prefix) => {
        if (prefix) {
            if (!name.startsWith(prefix)) return;

            name = name.substring(prefix.length);
        }

        return name;
    };

    return [
        {
            type: 'component',
            resolve: (name) => {
                const { prefix } = options.components || {};
                const cName = getName(name, prefix);
                const cMeta = components.find((c) => c.name.toLocaleLowerCase() === cName?.toLocaleLowerCase());

                if (cMeta) {
                    return (
                        options?.resolve?.(cMeta, 'component') ?? {
                            from: cMeta.from
                        }
                    );
                }
            }
        },
        {
            type: 'directive',
            resolve: (name) => {
                const { prefix } = options.directives || {};
                const dName = getName(name, prefix);
                const dMeta = directives.find((d) => d.name.toLocaleLowerCase() === dName?.toLocaleLowerCase());

                if (dMeta) {
                    return (
                        options?.resolve?.(dMeta, 'directive') ?? {
                            as: dMeta.as,
                            from: dMeta.from
                        }
                    );
                }
            }
        }
    ];
}
