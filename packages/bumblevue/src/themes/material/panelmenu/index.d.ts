import type { StyleOptions } from '@cjdevstudios/bumbleuix-styled';
import type { PanelMenuTokenSections } from '@cjdevstudios/bumblevue/themes/types/panelmenu';

export * from '@cjdevstudios/bumblevue/themes/types/panelmenu';

declare const root: PanelMenuTokenSections.Root;
declare const panel: PanelMenuTokenSections.Panel;
declare const item: PanelMenuTokenSections.Item;
declare const submenu: PanelMenuTokenSections.Submenu;
declare const submenuIcon: PanelMenuTokenSections.SubmenuIcon;
declare const css: PanelMenuTokenSections.CSS;
declare const _default: {
    root: PanelMenuTokenSections.Root;
    panel: PanelMenuTokenSections.Panel;
    item: PanelMenuTokenSections.Item;
    submenu: PanelMenuTokenSections.Submenu;
    submenuIcon: PanelMenuTokenSections.SubmenuIcon;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, item, panel, root, submenu, submenuIcon };
