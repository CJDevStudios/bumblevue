import { MetaType, toMeta } from '../index';

export const form: MetaType[] = toMeta([
    'AutoComplete',
    'CascadeSelect',
    'Checkbox',
    'CheckboxGroup',
    'Chips',
    'ColorPicker',
    'DatePicker',
    'Editor',
    'FloatLabel',
    'Fluid',
    'IconField',
    'IftaLabel',
    'InputChips',
    'InputGroup',
    'InputGroupAddon',
    'InputIcon',
    'InputMask',
    'InputNumber',
    'InputOtp',
    'InputText',
    'Knob',
    'Listbox',
    'MultiSelect',
    'Password',
    'RadioButton',
    'RadioButtonGroup',
    'Rating',
    'Select',
    'SelectButton',
    'Slider',
    'Textarea',
    'ToggleButton',
    'ToggleSwitch',
    'TreeSelect'
]);

export const button: MetaType[] = toMeta(['Button', 'ButtonGroup', 'SpeedDial', 'SplitButton']);

export const data: MetaType[] = toMeta(['Column', 'Row', 'ColumnGroup', 'DataTable', 'DataView', 'OrderList', 'OrganizationChart', 'Paginator', 'PickList', 'Tree', 'TreeTable', 'Timeline', 'VirtualScroller']);

export const panel: MetaType[] = toMeta([
    'Accordion',
    'AccordionPanel',
    'AccordionHeader',
    'AccordionContent',
    'Card',
    'DeferredContent',
    'Divider',
    'Fieldset',
    'Panel',
    'ScrollPanel',
    'Splitter',
    'SplitterPanel',
    'Stepper',
    'StepList',
    'Step',
    'StepItem',
    'StepPanels',
    'StepPanel',
    'Tabs',
    'TabList',
    'Tab',
    'TabPanels',
    'TabPanel',
    'Toolbar'
]);

export const overlay: MetaType[] = toMeta([
    { name: 'ConfirmDialog', use: { as: 'ConfirmationService' } },
    { name: 'ConfirmPopup', use: { as: 'ConfirmationService' } },
    'Dialog',
    'Drawer',
    { name: 'DynamicDialog', use: { as: 'DialogService' } },
    'Popover'
]);

export const file: MetaType[] = toMeta(['FileUpload']);

export const menu: MetaType[] = toMeta(['Breadcrumb', 'ContextMenu', 'Dock', 'Menu', 'Menubar', 'MegaMenu', 'PanelMenu', 'Steps', 'TieredMenu']);

export const chart: MetaType[] = toMeta(['Chart']);

export const messages: MetaType[] = toMeta(['Message', { name: 'Toast', use: { as: 'ToastService' } }]);

export const media: MetaType[] = toMeta(['Carousel', 'Galleria', 'Image', 'ImageCompare']);

export const misc: MetaType[] = toMeta(['Avatar', 'AvatarGroup', 'Badge', 'BlockUI', 'Chip', 'Inplace', 'MeterGroup', 'OverlayBadge', 'ScrollTop', 'Skeleton', 'ProgressBar', 'ProgressSpinner', 'Tag', 'Terminal']);

export const extensions: MetaType[] = toMeta([
    { name: 'Form', from: '@cjdevstudios/bumblevue-forms/form' },
    { name: 'FormField', from: '@cjdevstudios/bumblevue-forms/formfield' }
]);

// All PrimeVue Components
export const components: MetaType[] = [...form, ...button, ...data, ...panel, ...overlay, ...file, ...menu, ...chart, ...messages, ...media, ...misc, ...extensions];
