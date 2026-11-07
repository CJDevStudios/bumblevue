import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

// update package.json > "exports" for local
let exports = {};
let modules = {
    ignoredFolders: ['useconfirm', 'usedialog', 'usetoast', 'usestyle', 'editor', 'chart', 'utils', 'resolver', 'core', 'icons', 'forms', 'themes'],
    umd: [
        `/***************** BumbleVue (Auto-Generated) *****************/

// API
export * from '@cjdevstudios/bumblevue/core';

// BaseIcon
export { default as BaseIcon } from '@cjdevstudios/bumblevue/icons/baseicon';
export { default as BaseIconStyle } from '@cjdevstudios/bumblevue/icons/baseicon/style';

// Themes
export * from '@cjdevstudios/bumbleuix-styled';

// Utils
export * from '../utils/Utils.js';

// UseConfirm
export * from '../useconfirm/UseConfirm.js';

// UseDialog
export * from '../usedialog/UseDialog.js';

// UseToast
export * from '../usetoast/UseToast.js';

// UseStyle
export * from '../usestyle/UseStyle.js';

// Editor
export * from '../editor/Editor.vue';
export { default as Editor } from '../editor/Editor.vue';
export { default as EditorStyle } from '../editor/style/EditorStyle.js';

// Chart
export * from '../chart/Chart.vue';
export { default as Chart } from '../chart/Chart.vue';
export * from '../chart/style/ChartStyle.js';
export { default as ChartStyle } from '../chart/style/ChartStyle.js';
`
    ],
    esm: [
        `/***************** BumbleVue (Auto-Generated) *****************/

// Utils
export * from '@cjdevstudios/bumblevue/utils';

// UseConfirm
export * from '@cjdevstudios/bumblevue/useconfirm';

// UseDialog
export * from '@cjdevstudios/bumblevue/usedialog';

// UseToast
export * from '@cjdevstudios/bumblevue/usetoast';

// UseStyle
export * from '@cjdevstudios/bumblevue/usestyle';
`
    ]
};

modules.dts = [...modules.esm];

// The names declared in a style module's .d.ts, except the raw `style` CSS and the name the default export is re-exported as
const getStyleTypeNames = (dtsFile, defaultName) => {
    if (!fs.existsSync(dtsFile)) return [];

    const content = fs.readFileSync(dtsFile, { encoding: 'utf8', flag: 'r' });

    return [...content.matchAll(/^export (?:declare )?(?:enum|interface|type|const|function|class) (\w+)/gm)].map(([, name]) => name).filter((name) => name !== 'style' && name !== defaultName);
};

fs.readdirSync(path.resolve(__root, INPUT_DIR), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        const folderPath = path.resolve(__root, INPUT_DIR + folderName);

        fs.readdirSync(folderPath).forEach((file) => {
            let fileName = file.split(/(.vue)$|(.js)$/)[0];
            let name = fileName.toLowerCase();

            if (name === folderName) {
                const validModuleFolder = !modules.ignoredFolders.includes(folderName);

                exports[`./${folderName}`] = `./${INPUT_DIR}${folderName}/${file}`;

                if (validModuleFolder) {
                    modules.umd.push(
                        `
// ${fileName}
export * from '../${folderName}/${file}';
export { default as ${fileName} } from '../${folderName}/${file}';
`
                    );
                    const esm = `
// ${fileName}
export * from '@cjdevstudios/bumblevue/${folderName}';
export { default as ${fileName} } from '@cjdevstudios/bumblevue/${folderName}';
`;

                    modules.esm.push(esm);
                    modules.dts.push(esm);
                }

                try {
                    fs.readdirSync(folderPath + '/style').forEach((file) => {
                        let subFileName = file.split(/(.js)$/)[0];
                        let subName = subFileName.toLowerCase();

                        if (subName === `${folderName}style`) {
                            exports[`./${folderName}/style`] = `./${INPUT_DIR}${folderName}/style/${file}`;

                            if (validModuleFolder) {
                                // Style modules all export their raw CSS as `style`, so they can't be re-exported with `export *` without
                                // conflicting. The JS barrels only re-export the default; the type barrel re-exports the declared types by name.
                                const styleTypes = getStyleTypeNames(path.resolve(folderPath, 'style', `${subFileName}.d.ts`), subFileName);

                                modules.umd.push(
                                    `export { default as ${subFileName} } from '../${folderName}/style/${file}';
`
                                );
                                modules.esm.push(
                                    `export { default as ${subFileName} } from '@cjdevstudios/bumblevue/${folderName}/style';
`
                                );
                                modules.dts.push(
                                    `${styleTypes.length ? `export { ${styleTypes.join(', ')} } from '@cjdevstudios/bumblevue/${folderName}/style';\n` : ''}export { default as ${subFileName} } from '@cjdevstudios/bumblevue/${folderName}/style';
`
                                );
                            }
                        }
                    });
                } catch {}
            }
        });
    });

// core, icons, forms and themes: nested `<area>/<folder>` subpaths
// A folder's entry is `<Folder>.(vue|js)` (or `<Folder><suffix>`), otherwise the `main` of its package.json, otherwise its `index.js`.
// Sub folders (except `style`) are added as well, e.g. `forms/resolvers/zod` and `themes/aura/button`.
const findEntry = (folderPath, folderName, suffix = '') => {
    const file = fs.readdirSync(folderPath).find((file) => {
        const name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();

        return /\.(vue|js)$/.test(file) && (name === folderName || name === `${folderName}${suffix}`);
    });
    const packageJson = path.resolve(folderPath, 'package.json');

    if (file) return file;
    if (fs.existsSync(packageJson)) return JSON.parse(fs.readFileSync(packageJson, { encoding: 'utf8', flag: 'r' })).main?.replace(/^\.\//, '');

    return fs.existsSync(path.resolve(folderPath, 'index.js')) ? 'index.js' : undefined;
};

const icons = [
    `/***************** BumbleVue Icons (Auto-Generated) *****************/
`
];

const addAreaFolders = (area, subPath, suffix) => {
    const areaPath = path.resolve(__root, INPUT_DIR + subPath);

    fs.readdirSync(areaPath, { withFileTypes: true })
        .filter((dir) => dir.isDirectory() && dir.name !== 'style')
        .forEach(({ name: folderName }) => {
            const folderPath = path.resolve(areaPath, folderName);
            const subpath = `${subPath}/${folderName}`;
            const file = findEntry(folderPath, folderName, suffix);

            addAreaFolders(area, subpath, suffix);

            if (!file) return;

            exports[`./${subpath}`] = `./${INPUT_DIR}${subpath}/${file}`;

            if (area === 'icons') {
                const fileName = file.split(/(.vue)$|(.js)$/)[0];

                icons.push(
                    `
// ${fileName}
export * from '@cjdevstudios/bumblevue/${subpath}';
export { default as ${fileName} } from '@cjdevstudios/bumblevue/${subpath}';
`
                );
            }

            if (fs.existsSync(folderPath + '/style')) {
                const styleFile = fs.readdirSync(folderPath + '/style').find((file) => file.split(/(.js)$/)[0].toLowerCase() === `${folderName}style`);

                if (styleFile) {
                    exports[`./${subpath}/style`] = `./${INPUT_DIR}${subpath}/style/${styleFile}`;

                    if (area === 'icons') {
                        const subFileName = styleFile.split(/(.js)$/)[0];

                        icons.push(
                            `export * from '@cjdevstudios/bumblevue/${subpath}/style';
export { default as ${subFileName} } from '@cjdevstudios/bumblevue/${subpath}/style';
`
                        );
                    }
                }
            }
        });
};

[
    { area: 'core', suffix: '' },
    { area: 'icons', suffix: 'icon' },
    { area: 'forms', suffix: '' },
    { area: 'themes', suffix: '' }
].forEach(({ area, suffix }) => {
    exports[`./${area}`] = `./${INPUT_DIR}${area}/index.js`;
    addAreaFolders(area, area, suffix);
});

exports['./tailwind.css'] = `./${INPUT_DIR}tailwind/index.css`;
exports['./*'] = './*';

// package.json
const pkgJson = JSON.parse(fs.readFileSync(pkg, { encoding: 'utf8', flag: 'r' }));

pkgJson.exports = exports;

fs.writeFileSync(pkg, JSON.stringify(pkgJson, null, 4));

// UMD
fs.writeFileSync(INPUT_DIR + 'umd/bumblevue.js', modules.umd.join(''));

// ESM
fs.writeFileSync(INPUT_DIR + 'index.js', modules.esm.join(''));
fs.writeFileSync(INPUT_DIR + 'index.d.ts', modules.dts.join(''));

// Icons
fs.writeFileSync(INPUT_DIR + 'icons/index.js', icons.join(''));
fs.writeFileSync(INPUT_DIR + 'icons/index.d.ts', icons.join(''));
