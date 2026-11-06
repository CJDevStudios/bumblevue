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
    ignoredFolders: ['useconfirm', 'usedialog', 'usetoast', 'usestyle', 'editor', 'chart', 'utils', 'resolver', 'core', 'icons'],
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
export * from '../editor/style/EditorStyle.js';
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
                    modules.esm.push(
                        `
// ${fileName}
export * from '@cjdevstudios/bumblevue/${folderName}';
export { default as ${fileName} } from '@cjdevstudios/bumblevue/${folderName}';
`
                    );
                }

                try {
                    fs.readdirSync(folderPath + '/style').forEach((file) => {
                        let subFileName = file.split(/(.js)$/)[0];
                        let subName = subFileName.toLowerCase();

                        if (subName === `${folderName}style`) {
                            exports[`./${folderName}/style`] = `./${INPUT_DIR}${folderName}/style/${file}`;

                            if (validModuleFolder) {
                                modules.umd.push(
                                    `export * from '../${folderName}/style/${file}';
export { default as ${subFileName} } from '../${folderName}/style/${file}';
`
                                );
                                modules.esm.push(
                                    `export * from '@cjdevstudios/bumblevue/${folderName}/style';
export { default as ${subFileName} } from '@cjdevstudios/bumblevue/${folderName}/style';
`
                                );
                            }
                        }
                    });
                } catch {}
            }
        });
    });
// core and icons: nested `core/<folder>` and `icons/<folder>` subpaths
const findEntry = (folderPath, folderName, suffix = '') =>
    fs.readdirSync(folderPath).find((file) => {
        const name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();

        return /\.(vue|js)$/.test(file) && (name === folderName || name === `${folderName}${suffix}`);
    }) ?? JSON.parse(fs.readFileSync(path.resolve(folderPath, 'package.json'), { encoding: 'utf8', flag: 'r' })).main?.replace(/^\.\//, '');

const icons = [
    `/***************** BumbleVue Icons (Auto-Generated) *****************/
`
];

[
    { area: 'core', suffix: '' },
    { area: 'icons', suffix: 'icon' }
].forEach(({ area, suffix }) => {
    const areaPath = path.resolve(__root, INPUT_DIR + area);

    exports[`./${area}`] = `./${INPUT_DIR}${area}/index.js`;

    fs.readdirSync(areaPath, { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            const folderPath = path.resolve(areaPath, folderName);
            const file = findEntry(folderPath, folderName, suffix);

            if (!file) return;

            exports[`./${area}/${folderName}`] = `./${INPUT_DIR}${area}/${folderName}/${file}`;

            if (area === 'icons') {
                const fileName = file.split(/(.vue)$|(.js)$/)[0];

                icons.push(
                    `
// ${fileName}
export * from '@cjdevstudios/bumblevue/icons/${folderName}';
export { default as ${fileName} } from '@cjdevstudios/bumblevue/icons/${folderName}';
`
                );
            }

            if (fs.existsSync(folderPath + '/style')) {
                const styleFile = fs.readdirSync(folderPath + '/style').find((file) => file.split(/(.js)$/)[0].toLowerCase() === `${folderName}style`);

                if (styleFile) {
                    exports[`./${area}/${folderName}/style`] = `./${INPUT_DIR}${area}/${folderName}/style/${styleFile}`;

                    if (area === 'icons') {
                        const subFileName = styleFile.split(/(.js)$/)[0];

                        icons.push(
                            `export * from '@cjdevstudios/bumblevue/icons/${folderName}/style';
export { default as ${subFileName} } from '@cjdevstudios/bumblevue/icons/${folderName}/style';
`
                        );
                    }
                }
            }
        });
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
fs.writeFileSync(INPUT_DIR + 'index.d.ts', modules.esm.join(''));

// Icons
fs.writeFileSync(INPUT_DIR + 'icons/index.js', icons.join(''));
fs.writeFileSync(INPUT_DIR + 'icons/index.d.ts', icons.join(''));
