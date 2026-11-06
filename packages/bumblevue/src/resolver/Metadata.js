export function toMeta(arr) {
    return arr?.map((item) => {
        const it = typeof item === 'string' ? { name: item } : item;

        it.as ??= it?.name;
        it.from ??= `@cjdevstudios/bumblevue/${it?.name?.toLowerCase()}`;

        return it;
    });
}

export const form = toMeta([
    'AutoComplete',
    'CascadeSelect',
    'Checkbox',
    'CheckboxGroup',
    'ColorPicker',
    'DatePicker',
    'Editor',
    'FloatLabel',
    'Fluid',
    'IconField',
    'IftaLabel',
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

export const button = toMeta(['Button', 'ButtonGroup', 'SpeedDial', 'SplitButton']);

export const data = toMeta(['Column', 'Row', 'ColumnGroup', 'DataTable', 'DataView', 'OrderList', 'OrganizationChart', 'Paginator', 'PickList', 'Tree', 'TreeTable', 'Timeline', 'VirtualScroller']);

export const panel = toMeta([
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

export const overlay = toMeta([{ name: 'ConfirmDialog', use: { as: 'ConfirmationService' } }, { name: 'ConfirmPopup', use: { as: 'ConfirmationService' } }, 'Dialog', 'Drawer', { name: 'DynamicDialog', use: { as: 'DialogService' } }, 'Popover']);

export const file = toMeta(['FileUpload']);

export const menu = toMeta(['Breadcrumb', 'ContextMenu', 'Dock', 'Menu', 'Menubar', 'MegaMenu', 'PanelMenu', 'Steps', 'TieredMenu']);

export const chart = toMeta(['Chart']);

export const messages = toMeta(['Message', { name: 'Toast', use: { as: 'ToastService' } }]);

export const media = toMeta(['Carousel', 'Galleria', 'Image', 'ImageCompare']);

export const misc = toMeta(['Avatar', 'AvatarGroup', 'Badge', 'BlockUI', 'Chip', 'Inplace', 'MeterGroup', 'OverlayBadge', 'ScrollTop', 'Skeleton', 'ProgressBar', 'ProgressSpinner', 'Tag', 'Terminal']);

export const extensions = toMeta([
    { name: 'Form', from: '@cjdevstudios/bumblevue-forms/form' },
    { name: 'FormField', from: '@cjdevstudios/bumblevue-forms/formfield' }
]);

// All PrimeVue Components
export const components = [...form, ...button, ...data, ...panel, ...overlay, ...file, ...menu, ...chart, ...messages, ...media, ...misc, ...extensions];

export const directives = toMeta([
    { name: 'tooltip', as: 'Tooltip', from: '@cjdevstudios/bumblevue/tooltip' },
    { name: 'ripple', as: 'Ripple', from: '@cjdevstudios/bumblevue/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: '@cjdevstudios/bumblevue/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: '@cjdevstudios/bumblevue/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: '@cjdevstudios/bumblevue/animateonscroll' },
    { name: 'keyfilter', as: 'KeyFilter', from: '@cjdevstudios/bumblevue/keyfilter' }
]);

export const composables = toMeta([
    { name: 'useBumbleVue', as: 'useBumbleVue', from: '@cjdevstudios/bumblevue/config' },
    { name: 'useStyle', as: 'useStyle', from: '@cjdevstudios/bumblevue/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: '@cjdevstudios/bumblevue/useconfirm' },
    { name: 'useToast', as: 'useToast', from: '@cjdevstudios/bumblevue/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: '@cjdevstudios/bumblevue/usedialog' }
]);
