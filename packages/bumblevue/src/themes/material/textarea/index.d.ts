import type { StyleOptions } from '@cjdevstudios/bumbleuix-styled';
import type { TextareaTokenSections } from '@cjdevstudios/bumblevue/themes/types/textarea';

export * from '@cjdevstudios/bumblevue/themes/types/textarea';

declare const root: TextareaTokenSections.Root;
declare const css: TextareaTokenSections.CSS;
declare const _default: {
    root: TextareaTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
