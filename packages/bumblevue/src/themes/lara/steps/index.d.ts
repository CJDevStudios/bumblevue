import type { StepsTokenSections } from '@cjdevstudios/bumblevue/themes/types/steps';

export * from '@cjdevstudios/bumblevue/themes/types/steps';

declare const root: StepsTokenSections.Root;
declare const separator: StepsTokenSections.Separator;
declare const itemLink: StepsTokenSections.ItemLink;
declare const itemLabel: StepsTokenSections.ItemLabel;
declare const itemNumber: StepsTokenSections.ItemNumber;
declare const _default: {
    root: StepsTokenSections.Root;
    separator: StepsTokenSections.Separator;
    itemLink: StepsTokenSections.ItemLink;
    itemLabel: StepsTokenSections.ItemLabel;
    itemNumber: StepsTokenSections.ItemNumber;
};

export { _default as default, itemLabel, itemLink, itemNumber, root, separator };
