import type { SplitterTokenSections } from '@cjdevstudios/bumblevue/themes/types/splitter';

export * from '@cjdevstudios/bumblevue/themes/types/splitter';

declare const root: SplitterTokenSections.Root;
declare const gutter: SplitterTokenSections.Gutter;
declare const handle: SplitterTokenSections.Handle;
declare const _default: {
    root: SplitterTokenSections.Root;
    gutter: SplitterTokenSections.Gutter;
    handle: SplitterTokenSections.Handle;
};

export { _default as default, gutter, handle, root };
