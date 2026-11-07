import type { MenuTokenSections } from '@cjdevstudios/bumblevue/themes/types/menu';

export * from '@cjdevstudios/bumblevue/themes/types/menu';

declare const root: MenuTokenSections.Root;
declare const list: MenuTokenSections.List;
declare const item: MenuTokenSections.Item;
declare const submenuLabel: MenuTokenSections.SubmenuLabel;
declare const separator: MenuTokenSections.Separator;
declare const _default: {
    root: MenuTokenSections.Root;
    list: MenuTokenSections.List;
    item: MenuTokenSections.Item;
    submenuLabel: MenuTokenSections.SubmenuLabel;
    separator: MenuTokenSections.Separator;
};

export { _default as default, item, list, root, separator, submenuLabel };
