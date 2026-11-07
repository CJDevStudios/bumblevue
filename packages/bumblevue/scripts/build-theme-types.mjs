import fs from 'fs-extra';
import path from 'path';

/**
 * Generates the `.d.ts` of every theme preset component (`src/themes/<preset>/<component>/index.d.ts`) from the named exports of its `index.js`.
 * Each section of the default export is typed with the matching `<Component>TokenSections.<Section>` type of `src/themes/types/<component>`,
 * and so is the named export it is set from (e.g. `in: inside` types `inside` as `FloatLabelTokenSections.In`).
 * The `base` and `css` folders of a preset and the preset `index.d.ts` are written by hand and not generated.
 */
const SKIPPED_FOLDERS = ['base', 'css', 'types', 'tokens'];

const toPascalCase = (name) => (name === 'css' ? 'CSS' : name.charAt(0).toUpperCase() + name.slice(1));

const getSectionNamespace = (typesFile) => {
    const match = fs.readFileSync(typesFile, { encoding: 'utf8', flag: 'r' }).match(/^export declare namespace (\w+TokenSections) \{/m);

    return match?.[1];
};

// The `key` or `key: variable` entries of `export default { ... }`, e.g. [{ key: 'in', name: 'inside' }]
const getSections = (jsFile) => {
    const content = fs.readFileSync(jsFile, { encoding: 'utf8', flag: 'r' });
    const body = content.match(/^export default \{\n([\s\S]*?)\n\};\s*$/m)?.[1];
    const exported = [...content.matchAll(/^export const (\w+) =/gm)].map(([, name]) => name);

    if (body === undefined) throw new Error(`Unsupported default export in ${jsFile}`);

    const sections = body.split(',').map((entry) => {
        const [key, name = key] = entry.trim().split(/\s*:\s*/);

        if (!/^\w+$/.test(key) || !exported.includes(name)) throw new Error(`Unsupported default export entry "${entry.trim()}" in ${jsFile}`);

        return { key, name };
    });

    return sections;
};

const toDeclaration = (component, namespace, sections) => {
    const typeOf = (key) => `${namespace}.${toPascalCase(key)}`;
    const exportList = [...sections.map(({ name }) => name), 'default']
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map((name) => (name === 'default' ? '_default as default' : name))
        .join(', ');

    return `import type { ${namespace} } from '@cjdevstudios/bumblevue/themes/types/${component}';

export * from '@cjdevstudios/bumblevue/themes/types/${component}';

${sections.map(({ key, name }) => `declare const ${name}: ${typeOf(key)};`).join('\n')}
declare const _default: {
${sections.map(({ key }) => `    ${key}: ${key === 'css' ? 'string' : typeOf(key)};`).join('\n')}
};

export { ${exportList} };
`;
};

export function buildThemeTypes(themesDir) {
    const written = [];

    fs.readdirSync(themesDir, { withFileTypes: true })
        .filter((dir) => dir.isDirectory() && !SKIPPED_FOLDERS.includes(dir.name))
        .forEach(({ name: preset }) => {
            fs.readdirSync(path.resolve(themesDir, preset), { withFileTypes: true })
                .filter((dir) => dir.isDirectory() && !SKIPPED_FOLDERS.includes(dir.name))
                .forEach(({ name: component }) => {
                    const jsFile = path.resolve(themesDir, preset, component, 'index.js');
                    const typesFile = path.resolve(themesDir, 'types', component, 'index.d.ts');
                    const namespace = fs.existsSync(typesFile) ? getSectionNamespace(typesFile) : undefined;

                    if (!fs.existsSync(jsFile)) return;
                    if (!namespace) throw new Error(`No design token types found for the "${preset}/${component}" theme in ${typesFile}`);

                    const dtsFile = path.resolve(themesDir, preset, component, 'index.d.ts');

                    fs.writeFileSync(dtsFile, toDeclaration(component, namespace, getSections(jsFile)));
                    written.push(dtsFile);
                });
        });

    return written;
}
