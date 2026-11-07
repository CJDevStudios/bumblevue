import type { StyleOptions } from '@cjdevstudios/bumbleuix-styled';
import type { InputTextTokenSections } from '@cjdevstudios/bumblevue/themes/types/inputtext';

export * from '@cjdevstudios/bumblevue/themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
