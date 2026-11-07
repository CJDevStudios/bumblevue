# Changelog

## [2.0.0]

**Implemented New Features and Enhancements:**
- Add `UseComponent` composable to centralize shared component props and logic. This is a replacement for the old `BaseComponent` mixin. [\#54](https://github.com/CJDevStudios/bumblevue/pull/54)

**Breaking Changes:**
- Chips and InputChips: Removed deprecated components. Use AutoComplete with `multiple` enabled and `typeahead` disabled instead.
- InputSwitch: Removed deprecated component. Use ToggleSwitch instead.
- Sidebar: Removed deprecated component. Use Drawer instead.
- Calendar: Removed deprecated component. Use DatePicker instead.
- Dropdown: Removed deprecated component. Use Select instead.
- OverlayPanel: Removed deprecated component. Use Popover instead.
- TabView: Removed deprecated component. Use Tabs with TabList, Tab, TabPanels and TabPanel instead.
  The TabView-only TabPanel props (`header`, `headerStyle`, `headerClass`, `headerProps`, `headerActionProps`, `contentStyle`, `contentClass`, `contentProps`, `disabled`), pass-through options and `header` slot were removed along with it.
- AccordionTab: Removed deprecated component. Use AccordionPanel, AccordionHeader and AccordionContent instead.
  The deprecated Accordion `activeIndex` prop and `update:activeIndex`/`tab-click` events were removed along with it; use `value`/`update:value` instead.
- InlineMessage: Removed deprecated component. Use Message instead.
- TabMenu: Removed deprecated component. Use Tabs with TabList/Tab and no TabPanels instead.
- AutoComplete: Removed deprecated `loadingIcon` prop and `loadingicon` slot (use `loader`), `removeTokenIcon` prop and `removetokenicon` slot (use `chipIcon`/`chipicon`), `dropdownbutton` slot (use `dropdown`), and `item-select`/`item-unselect` events (use `option-select`/`option-unselect`).
- Button and SplitButton: Removed deprecated `plain` prop.
- Select: Removed deprecated `panelStyle` and `panelClass` props. Use `overlayStyle` and `overlayClass` instead.
- CascadeSelect: Removed deprecated `panelStyle`, `panelClass` and `panelProps` props. Use `overlayStyle`, `overlayClass` and `overlayProps` instead.
- Accordion: Removed deprecated `tab-open` and `tab-close` events. Use `update:value` instead.
- Configuration: Removed deprecated `inputStyle` option. Use `inputVariant` instead.
- BadgeDirective: Removed deprecated `v-badge` directive. Use OverlayBadge instead.
- Toast: Removed deprecated `icon` slot. Use `messageicon` instead.
- SplitButton: Removed deprecated `menuButtonIcon` prop and `menubuttonicon` slot. Use `dropdownIcon` and `dropdownicon` instead.
- OrderList and PickList: Removed deprecated `item` slot. Use `option` instead. The `option` slot no longer receives the undocumented `item` prop; use `option`.
- Panel, Fieldset and OrganizationChart: Removed deprecated `togglericon` slot. Use `toggleicon` instead.
- Paginator: Removed deprecated `firstpagelinkicon`, `prevpagelinkicon`, `nextpagelinkicon` and `lastpagelinkicon` slots. Use `firsticon`, `previcon`, `nexticon` and `lasticon` instead.
- Message: Removed deprecated `sticky` prop. It had no effect; a message only closes automatically when `life` is set.
- Dock: Removed deprecated `icon` slot. Use `itemicon` instead.
- Menu: Removed deprecated `submenuheader` slot. Use `submenulabel` instead.
- Menubar and MegaMenu: Removed deprecated `menubutton` and `menubuttonicon` slots. Use `button` and `buttonicon` instead.
- TreeSelect: Removed deprecated `triggericon` and `itemtogglericon` slots. Use `dropdownicon` and `itemtoggleicon` instead.
- Tree: Removed deprecated `searchicon`, `togglericon` and `nodetogglericon` slots. Use `filtericon` and `nodetoggleicon` instead.
- InputNumber: Removed deprecated `incrementButtonIcon` and `decrementButtonIcon` props and `incrementbuttonicon` and `decrementbuttonicon` slots. Use `incrementIcon`/`decrementIcon` and `incrementicon`/`decrementicon` instead.
- DataTable: Removed deprecated `reorderindicatorupicon` and `reorderindicatordownicon` slots. Use `rowreorderindicatorupicon` and `rowreorderindicatordownicon` instead.
- Column: Removed deprecated `rowtogglericon` and `nodetogglericon` slots. Use `rowtoggleicon` and `nodetoggleicon` instead.
- Icons: The `@cjdevstudios/bumbleicons` icon font is discontinued. Components only use the built-in SVG icons from `@cjdevstudios/bumblevue/icons`. Use the icon library of your choice for any other icons; `primeicons` can be used as a drop-in replacement for the `pi pi-{icon}` classes.
- Core: Removed the `BumbleIcons` constants from `@cjdevstudios/bumblevue/core/api`. Use the class names of your icon library directly instead.
- Select, MultiSelect, CascadeSelect, AutoComplete, DataTable and Tree: Custom loading icons are rotated with the `p-icon-spin` class instead of `pi-spin`.
- Tailwind: The `@cjdevstudios/tailwindcss-bumblevue` package is discontinued. The Tailwind plugin is now included in `@cjdevstudios/bumblevue`; replace `@import "@cjdevstudios/tailwindcss-bumblevue";` with `@import "@cjdevstudios/bumblevue/tailwind.css";`. Tailwind v3 and its JavaScript plugin are no longer supported.
- Auto Import: The `@cjdevstudios/bumblevue-auto-import-resolver` and `@cjdevstudios/bumblevue-metadata` packages are discontinued. The `BumbleVueResolver` and the component metadata are now included in `@cjdevstudios/bumblevue/resolver`.
- Core and Icons: The `@cjdevstudios/bumblevue-core` and `@cjdevstudios/bumblevue-icons` packages are discontinued. They are now included in `@cjdevstudios/bumblevue` as `@cjdevstudios/bumblevue/core` and `@cjdevstudios/bumblevue/icons`; replace `@cjdevstudios/bumblevue-core/<module>` with `@cjdevstudios/bumblevue/core/<module>` and `@cjdevstudios/bumblevue-icons/<icon>` with `@cjdevstudios/bumblevue/icons/<icon>`, then uninstall the old packages. Custom components that extend `BaseComponent` or `BaseIcon` must also use the new paths, since loading both the old and new packages creates a second copy of the BumbleVue configuration.
- Forms: The `@cjdevstudios/bumblevue-forms` and `@cjdevstudios/bumbleuix-forms` packages are discontinued. Form, FormField, `useForm` and the resolvers are now included in `@cjdevstudios/bumblevue/forms`; replace `@cjdevstudios/bumblevue-forms/<module>` with `@cjdevstudios/bumblevue/forms/<module>` and `@cjdevstudios/bumbleuix-forms/resolvers/<library>` with `@cjdevstudios/bumblevue/forms/resolvers/<library>`. Zod, Yup, Valibot, Superstruct and Joi are optional peer dependencies; the Zod resolver requires Zod 3.25 or later. The UMD builds of the resolvers are no longer provided.
- Styles: The `@cjdevstudios/bumbleuix-styles` package is discontinued. The styled mode CSS of each component is now part of its style module; replace `import { style } from '@cjdevstudios/bumbleuix-styles/<component>'` with `import { style } from '@cjdevstudios/bumblevue/<component>/style'`. The style of the removed InlineMessage, InputChips, TabMenu and TabView components is no longer provided.

## [1.0.0]

**Implemented New Features and Enhancements:**

- Rebranded as BumbleVue
  - primevue -> @cjdevstudios/bumblevue
  - @primevue/auto-import-resolver -> @cjdevstudios/bumblevue-auto-import-resolver
  - @primevue/core -> @cjdevstudios/bumblevue-core
  - @primevue/forms -> @cjdevstudios/bumblevue-forms
  - @primevue/icons -> @cjdevstudios/bumblevue-icons
  - @primevue/metadata -> @cjdevstudios/bumblevue-metadata
  - @primevue/nuxt-module -> @cjdevstudios/bumblevue-nuxt-module

**Enhancements:**
- InputNumber: Add keyboard shortcuts for deleting content to the left and right of the cursor [\#43](https://github.com/CJDevStudios/bumblevue/pull/43)
- Paginator: Add `selectAppendTo` prop that is passed to the Select child-components [\#44](https://github.com/CJDevStudios/bumblevue/pull/44)
- Tabs: Add `orientation` prop to control the orientation of the tabs list [\#41](https://github.com/CJDevStudios/bumblevue/pull/41)

**Deprecations:**
- Vue Options API: BumbleVue will be migrating to the Composition API in future releases.
  While this does not prevent you from using BumbleVue with the Options API, even after the migration, it will no longer be an option when viewing the demos on the BumbleVue website [\#45](https://github.com/CJDevStudios/bumblevue/pull/45).

**Fixed bugs:**

- DatePicker: Improve input value handling for form scenarios [\#2](https://github.com/CJDevStudios/bumblevue/pull/2)
- Select: Keep selected label when filtered [\#3](https://github.com/CJDevStudios/bumblevue/pull/3)
- Types: Add missing type declarations for EventBus subpath exports [\#4](https://github.com/CJDevStudios/bumblevue/pull/4)
- Types: Generics support for multiple components [\#7](https://github.com/CJDevStudios/bumblevue/pull/7)
- DatePicker: Improve accessibility labels and keyboard navigation [\#8](https://github.com/CJDevStudios/bumblevue/pull/8)
- Splitter: Fix resize with touch [\#9](https://github.com/CJDevStudios/bumblevue/pull/9)
- Dialog: Add null guard for container when dragging dialog [\#10](https://github.com/CJDevStudios/bumblevue/pull/10)
- InputNumber: Parse pasted value before validation [\#11](https://github.com/CJDevStudios/bumblevue/pull/11)
