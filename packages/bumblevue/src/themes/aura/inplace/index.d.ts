import type { InplaceTokenSections } from '@cjdevstudios/bumblevue/themes/types/inplace';

export * from '@cjdevstudios/bumblevue/themes/types/inplace';

declare const root: InplaceTokenSections.Root;
declare const display: InplaceTokenSections.Display;
declare const _default: {
    root: InplaceTokenSections.Root;
    display: InplaceTokenSections.Display;
};

export { _default as default, display, root };
