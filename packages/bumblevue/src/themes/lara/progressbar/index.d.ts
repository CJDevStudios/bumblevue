import type { ProgressBarTokenSections } from '@cjdevstudios/bumblevue/themes/types/progressbar';

export * from '@cjdevstudios/bumblevue/themes/types/progressbar';

declare const root: ProgressBarTokenSections.Root;
declare const value: ProgressBarTokenSections.Value;
declare const label: ProgressBarTokenSections.Label;
declare const _default: {
    root: ProgressBarTokenSections.Root;
    value: ProgressBarTokenSections.Value;
    label: ProgressBarTokenSections.Label;
};

export { _default as default, label, root, value };
