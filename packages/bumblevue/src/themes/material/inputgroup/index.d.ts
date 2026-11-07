import type { StyleOptions } from '@cjdevstudios/bumbleuix-styled';
import type { InputGroupTokenSections } from '@cjdevstudios/bumblevue/themes/types/inputgroup';

export * from '@cjdevstudios/bumblevue/themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
