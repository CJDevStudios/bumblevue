import fs from 'fs';
import path from 'path';
import * as TypeDoc from 'typedoc';
import { fileURLToPath } from 'url';

// Generates the design token metadata shown in the "Design Tokens" tables of the component docs from the `@designToken` tags
// of the theme types in `packages/bumblevue/src/themes/types`. The output is not committed; it is generated before `dev` and `build`.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_PATH = path.resolve(__dirname, '../../../packages/bumblevue/src/themes/types');
const OUTPUT_FILE = path.resolve(__dirname, '../doc/common/apidoc/tokens.json');

const parseText = (text) => {
    return text.replace(/&#123;/g, '{').replace(/&#125;/g, '}');
};

const setTokens = (doc, moduleName, declaration, name) => {
    doc[moduleName]['tokens'] ||= [];

    if (declaration?.groups) {
        const event_props_group = declaration.groups.find((g) => g.title === 'Properties');
        const toUncapitalized = (str) => str.charAt(0).toLowerCase() + str.slice(1);

        event_props_group?.children?.forEach((prop) => {
            const computedName = toUncapitalized(name ? `${name}.${prop.name}` : prop.name);

            if (prop.type?.declaration) {
                setTokens(doc, moduleName, prop.type?.declaration, computedName);
            } else if (prop.comment?.getTag('@designToken')) {
                const variable = prop.comment.getTag('@designToken').content[0]?.text || '';

                doc[moduleName]['tokens'].push({
                    name: moduleName + '.' + computedName,
                    token: variable,
                    variable: '--p-' + variable.replaceAll('.', '-'),
                    description: prop.comment?.summary
                        .map((s) => {
                            if (s.text.indexOf('[here]') > -1) {
                                return `${s.text.slice(0, s.text.indexOf('[here]'))} <a target="_blank" href="${s.text.slice(s.text.indexOf('(') + 1, s.text.indexOf(')'))}">here</a> ${s.text.slice(s.text.indexOf(')') + 1)}`;
                            }

                            return s.text || '';
                        })
                        .join(' '),
                    deprecated: prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                });
            }
        });
    }
};

const findInInterfaces = (doc, module, name) => {
    const module_interfaces_group = module.groups?.find((g) => g.title === 'Interfaces');

    module_interfaces_group?.children?.forEach((_interface) => {
        setTokens(doc, name, _interface, _interface.name);
    });
};

const findInNamespaces = (doc, module, name) => {
    const module_namespaces_group = module.groups?.find((g) => g.title === 'Namespaces');

    module_namespaces_group?.children?.forEach((_namespace) => {
        const module_interfaces_group = _namespace.groups?.find((g) => g.title === 'Interfaces');

        module_interfaces_group?.children?.forEach((_interface) => {
            setTokens(doc, name, _interface, _interface.name);
        });
    });
};

const app = new TypeDoc.Application();

app.options.addReader(new TypeDoc.TSConfigReader());

app.bootstrap({
    name: 'BumbleVue-Themes',
    entryPoints: [INPUT_PATH],
    entryPointStrategy: 'expand',
    tsconfig: path.resolve(__dirname, './tsconfig.tokens.json'),
    skipErrorChecking: true,
    hideGenerator: true,
    excludeExternals: false,
    includeVersion: true,
    searchInComments: true,
    disableSources: true,
    logLevel: 'Error',
    sort: ['source-order']
});

const project = app.convert();

if (!project) {
    throw new Error('Unable to generate the design token metadata.');
}

const doc = {};

project.children.forEach((module) => {
    const name = module.name.replace(/\/index$/, '');
    const { comment } = module;

    if (name !== 'index') {
        doc[name] = {
            description: comment?.summary?.map((s) => s.text || '').join(' ')
        };

        findInInterfaces(doc, module, name);
        findInNamespaces(doc, module, name);
    }
});

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(doc, null, 4) + '\n');
