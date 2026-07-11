import type { DefaultPassThrough, PassThrough } from '@cjdevstudios/bumblevue-core';
import type { BumbleVueCSPOptions, BumbleVueLocaleOptions, BumbleVueZIndexOptions } from '@cjdevstudios/bumblevue-core/config';
import type { AccordionPassThroughOptions } from '@cjdevstudios/bumblevue/accordion';
import type { AccordionContentPassThroughOptions } from '@cjdevstudios/bumblevue/accordioncontent';
import type { AccordionHeaderPassThroughOptions } from '@cjdevstudios/bumblevue/accordionheader';
import type { AccordionPanelPassThroughOptions } from '@cjdevstudios/bumblevue/accordionpanel';
import type { AccordionTabPassThroughOptions } from '@cjdevstudios/bumblevue/accordiontab';
import type { AnimateOnScrollDirectivePassThroughOptions } from '@cjdevstudios/bumblevue/animateonscroll';
import type { AutoCompletePassThroughOptions } from '@cjdevstudios/bumblevue/autocomplete';
import type { AvatarPassThroughOptions } from '@cjdevstudios/bumblevue/avatar';
import type { AvatarGroupPassThroughOptions } from '@cjdevstudios/bumblevue/avatargroup';
import type { BadgePassThroughOptions } from '@cjdevstudios/bumblevue/badge';
import type { BadgeDirectivePassThroughOptions } from '@cjdevstudios/bumblevue/badgedirective';
import type { BlockUIPassThroughOptions } from '@cjdevstudios/bumblevue/blockui';
import type { BreadcrumbPassThroughOptions } from '@cjdevstudios/bumblevue/breadcrumb';
import type { ButtonPassThroughOptions } from '@cjdevstudios/bumblevue/button';
import type { ButtonGroupPassThroughOptions } from '@cjdevstudios/bumblevue/buttongroup';
import type { CalendarPassThroughOptions } from '@cjdevstudios/bumblevue/calendar';
import type { CardPassThroughOptions } from '@cjdevstudios/bumblevue/card';
import type { CarouselPassThroughOptions } from '@cjdevstudios/bumblevue/carousel';
import type { CascadeSelectPassThroughOptions } from '@cjdevstudios/bumblevue/cascadeselect';
import type { ChartPassThroughOptions } from '@cjdevstudios/bumblevue/chart';
import type { CheckboxPassThroughOptions } from '@cjdevstudios/bumblevue/checkbox';
import type { CheckboxGroupPassThroughOptions } from '@cjdevstudios/bumblevue/checkboxgroup';
import type { ChipPassThroughOptions } from '@cjdevstudios/bumblevue/chip';
import type { ChipsPassThroughOptions } from '@cjdevstudios/bumblevue/chips';
import type { ColorPickerPassThroughOptions } from '@cjdevstudios/bumblevue/colorpicker';
import type { ColumnPassThroughOptions } from '@cjdevstudios/bumblevue/column';
import type { ColumnGroupPassThroughOptions } from '@cjdevstudios/bumblevue/columngroup';
import type { ConfirmDialogPassThroughOptions } from '@cjdevstudios/bumblevue/confirmdialog';
import type { ConfirmPopupPassThroughOptions } from '@cjdevstudios/bumblevue/confirmpopup';
import type { ContextMenuPassThroughOptions } from '@cjdevstudios/bumblevue/contextmenu';
import type { DataTablePassThroughOptions } from '@cjdevstudios/bumblevue/datatable';
import type { DataViewPassThroughOptions } from '@cjdevstudios/bumblevue/dataview';
import type { DatePickerPassThroughOptions } from '@cjdevstudios/bumblevue/datepicker';
import type { DeferredContentPassThroughOptions } from '@cjdevstudios/bumblevue/deferredcontent';
import type { DialogPassThroughOptions } from '@cjdevstudios/bumblevue/dialog';
import type { DividerPassThroughOptions } from '@cjdevstudios/bumblevue/divider';
import type { DockPassThroughOptions } from '@cjdevstudios/bumblevue/dock';
import type { DrawerPassThroughOptions } from '@cjdevstudios/bumblevue/drawer';
import type { DropdownPassThroughOptions } from '@cjdevstudios/bumblevue/dropdown';
import type { EditorPassThroughOptions } from '@cjdevstudios/bumblevue/editor';
import type { FieldsetPassThroughOptions } from '@cjdevstudios/bumblevue/fieldset';
import type { FileUploadPassThroughOptions } from '@cjdevstudios/bumblevue/fileupload';
import type { FloatLabelPassThroughOptions } from '@cjdevstudios/bumblevue/floatlabel';
import type { FluidPassThroughOptions } from '@cjdevstudios/bumblevue/fluid';
import type { FocusTrapDirectivePassThroughOptions } from '@cjdevstudios/bumblevue/focustrap';
import type { GalleriaPassThroughOptions } from '@cjdevstudios/bumblevue/galleria';
import type { IconFieldPassThroughOptions } from '@cjdevstudios/bumblevue/iconfield';
import type { IftaLabelPassThroughOptions } from '@cjdevstudios/bumblevue/iftalabel';
import type { ImagePassThroughOptions } from '@cjdevstudios/bumblevue/image';
import type { ImageComparePassThroughOptions } from '@cjdevstudios/bumblevue/imagecompare';
import type { InlineMessagePassThroughOptions } from '@cjdevstudios/bumblevue/inlinemessage';
import type { InplacePassThroughOptions } from '@cjdevstudios/bumblevue/inplace';
import type { InputChipsPassThroughOptions } from '@cjdevstudios/bumblevue/inputchips';
import type { InputGroupPassThroughOptions } from '@cjdevstudios/bumblevue/inputgroup';
import type { InputGroupAddonPassThroughOptions } from '@cjdevstudios/bumblevue/inputgroupaddon';
import type { InputIconPassThroughOptions } from '@cjdevstudios/bumblevue/inputicon';
import type { InputMaskPassThroughOptions } from '@cjdevstudios/bumblevue/inputmask';
import type { InputNumberPassThroughOptions } from '@cjdevstudios/bumblevue/inputnumber';
import type { InputOtpPassThroughOptions } from '@cjdevstudios/bumblevue/inputotp';
import type { InputSwitchPassThroughOptions } from '@cjdevstudios/bumblevue/inputswitch';
import type { InputTextPassThroughOptions } from '@cjdevstudios/bumblevue/inputtext';
import type { KeyFilterDirectivePassThroughOptions } from '@cjdevstudios/bumblevue/keyfilter';
import type { KnobPassThroughOptions } from '@cjdevstudios/bumblevue/knob';
import type { ListboxPassThroughOptions } from '@cjdevstudios/bumblevue/listbox';
import type { MegaMenuPassThroughOptions } from '@cjdevstudios/bumblevue/megamenu';
import type { MenuPassThroughOptions } from '@cjdevstudios/bumblevue/menu';
import type { MenubarPassThroughOptions } from '@cjdevstudios/bumblevue/menubar';
import type { MessagePassThroughOptions } from '@cjdevstudios/bumblevue/message';
import type { MeterGroupPassThroughOptions } from '@cjdevstudios/bumblevue/metergroup';
import type { MultiSelectPassThroughOptions } from '@cjdevstudios/bumblevue/multiselect';
import type { OrderListPassThroughOptions } from '@cjdevstudios/bumblevue/orderlist';
import type { OrganizationChartPassThroughOptions } from '@cjdevstudios/bumblevue/organizationchart';
import type { OverlayBadgePassThroughOptions } from '@cjdevstudios/bumblevue/overlaybadge';
import type { OverlayPanelPassThroughOptions } from '@cjdevstudios/bumblevue/overlaypanel';
import type { PaginatorPassThroughOptions } from '@cjdevstudios/bumblevue/paginator';
import type { PanelPassThroughOptions } from '@cjdevstudios/bumblevue/panel';
import type { PanelMenuPassThroughOptions } from '@cjdevstudios/bumblevue/panelmenu';
import type { PassThroughOptions } from '@cjdevstudios/bumblevue/passthrough';
import type { PasswordPassThroughOptions } from '@cjdevstudios/bumblevue/password';
import type { PickListPassThroughOptions } from '@cjdevstudios/bumblevue/picklist';
import type { PopoverPassThroughOptions } from '@cjdevstudios/bumblevue/popover';
import type { ProgressBarPassThroughOptions } from '@cjdevstudios/bumblevue/progressbar';
import type { ProgressSpinnerPassThroughOptions } from '@cjdevstudios/bumblevue/progressspinner';
import type { RadioButtonPassThroughOptions } from '@cjdevstudios/bumblevue/radiobutton';
import type { RadioButtonGroupPassThroughOptions } from '@cjdevstudios/bumblevue/radiobuttongroup';
import type { RatingPassThroughOptions } from '@cjdevstudios/bumblevue/rating';
import type { RippleDirectivePassThroughOptions } from '@cjdevstudios/bumblevue/ripple';
import type { RowPassThroughOptions } from '@cjdevstudios/bumblevue/row';
import type { ScrollPanelPassThroughOptions } from '@cjdevstudios/bumblevue/scrollpanel';
import type { ScrollTopPassThroughOptions } from '@cjdevstudios/bumblevue/scrolltop';
import type { SelectPassThroughOptions } from '@cjdevstudios/bumblevue/select';
import type { SelectButtonPassThroughOptions } from '@cjdevstudios/bumblevue/selectbutton';
import type { SidebarPassThroughOptions } from '@cjdevstudios/bumblevue/sidebar';
import type { SkeletonPassThroughOptions } from '@cjdevstudios/bumblevue/skeleton';
import type { SliderPassThroughOptions } from '@cjdevstudios/bumblevue/slider';
import type { SpeedDialPassThroughOptions } from '@cjdevstudios/bumblevue/speeddial';
import type { SplitButtonPassThroughOptions } from '@cjdevstudios/bumblevue/splitbutton';
import type { SplitterPassThroughOptions } from '@cjdevstudios/bumblevue/splitter';
import type { SplitterPanelPassThroughOptions } from '@cjdevstudios/bumblevue/splitterpanel';
import type { StepPassThroughOptions } from '@cjdevstudios/bumblevue/step';
import type { StepItemPassThroughOptions } from '@cjdevstudios/bumblevue/stepitem';
import type { StepListPassThroughOptions } from '@cjdevstudios/bumblevue/steplist';
import type { StepPanelPassThroughOptions } from '@cjdevstudios/bumblevue/steppanel';
import type { StepPanelsPassThroughOptions } from '@cjdevstudios/bumblevue/steppanels';
import type { StepperPassThroughOptions } from '@cjdevstudios/bumblevue/stepper';
import type { StepsPassThroughOptions } from '@cjdevstudios/bumblevue/steps';
import type { StyleClassDirectivePassThroughOptions } from '@cjdevstudios/bumblevue/styleclass';
import type { TabPassThroughOptions } from '@cjdevstudios/bumblevue/tab';
import type { TabListPassThroughOptions } from '@cjdevstudios/bumblevue/tablist';
import type { TabMenuPassThroughOptions } from '@cjdevstudios/bumblevue/tabmenu';
import type { TabPanelPassThroughOptions } from '@cjdevstudios/bumblevue/tabpanel';
import type { TabPanelsPassThroughOptions } from '@cjdevstudios/bumblevue/tabpanels';
import type { TabsPassThroughOptions } from '@cjdevstudios/bumblevue/tabs';
import type { TabViewPassThroughOptions } from '@cjdevstudios/bumblevue/tabview';
import type { TagPassThroughOptions } from '@cjdevstudios/bumblevue/tag';
import type { TerminalPassThroughOptions } from '@cjdevstudios/bumblevue/terminal';
import type { TextareaPassThroughOptions } from '@cjdevstudios/bumblevue/textarea';
import type { TieredMenuPassThroughOptions } from '@cjdevstudios/bumblevue/tieredmenu';
import type { TimelinePassThroughOptions } from '@cjdevstudios/bumblevue/timeline';
import type { ToastPassThroughOptions } from '@cjdevstudios/bumblevue/toast';
import type { ToggleButtonPassThroughOptions } from '@cjdevstudios/bumblevue/togglebutton';
import type { ToggleSwitchPassThroughOptions } from '@cjdevstudios/bumblevue/toggleswitch';
import type { ToolbarPassThroughOptions } from '@cjdevstudios/bumblevue/toolbar';
import type { TooltipDirectivePassThroughOptions } from '@cjdevstudios/bumblevue/tooltip';
import type { TreePassThroughOptions } from '@cjdevstudios/bumblevue/tree';
import type { TreeSelectPassThroughOptions } from '@cjdevstudios/bumblevue/treeselect';
import type { TreeTablePassThroughOptions } from '@cjdevstudios/bumblevue/treetable';
import type { VirtualScrollerPassThroughOptions } from '@cjdevstudios/bumblevue/virtualscroller';

export * from '@cjdevstudios/bumblevue-core/config';
export { default } from '@cjdevstudios/bumblevue-core/config';

export interface BumbleVueConfiguration {
    ripple?: boolean;
    /**
     * @deprecated since v4.0. Use 'inputVariant' instead.
     */
    inputStyle?: 'filled' | 'outlined' | undefined;
    inputVariant?: 'filled' | 'outlined' | undefined;
    locale?: BumbleVueLocaleOptions;
    filterMatchModeOptions?: any;
    zIndex?: BumbleVueZIndexOptions;
    theme?: any;
    unstyled?: boolean;
    pt?: PassThrough<BumbleVuePTOptions>;
    ptOptions?: PassThroughOptions;
    csp?: BumbleVueCSPOptions;
}

export interface BumbleVuePTOptions {
    accordion?: DefaultPassThrough<AccordionPassThroughOptions>;
    accordionpanel?: DefaultPassThrough<AccordionPanelPassThroughOptions>;
    accordionheader?: DefaultPassThrough<AccordionHeaderPassThroughOptions>;
    accordioncontent?: DefaultPassThrough<AccordionContentPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Accordion instead.
     */
    accordiontab?: DefaultPassThrough<AccordionTabPassThroughOptions>;
    autocomplete?: DefaultPassThrough<AutoCompletePassThroughOptions>;
    avatar?: DefaultPassThrough<AvatarPassThroughOptions>;
    avatargroup?: DefaultPassThrough<AvatarGroupPassThroughOptions>;
    badge?: DefaultPassThrough<BadgePassThroughOptions>;
    blockui?: DefaultPassThrough<BlockUIPassThroughOptions>;
    breadcrumb?: DefaultPassThrough<BreadcrumbPassThroughOptions>;
    button?: DefaultPassThrough<ButtonPassThroughOptions>;
    buttongroup?: DefaultPassThrough<ButtonGroupPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of DatePicker instead.
     */
    calendar?: DefaultPassThrough<CalendarPassThroughOptions>;
    card?: DefaultPassThrough<CardPassThroughOptions>;
    carousel?: DefaultPassThrough<CarouselPassThroughOptions>;
    cascadeselect?: DefaultPassThrough<CascadeSelectPassThroughOptions>;
    chart?: DefaultPassThrough<ChartPassThroughOptions>;
    checkbox?: DefaultPassThrough<CheckboxPassThroughOptions>;
    checkboxgroup?: DefaultPassThrough<CheckboxGroupPassThroughOptions>;
    chip?: DefaultPassThrough<ChipPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of InputChips instead.
     */
    chips?: DefaultPassThrough<ChipsPassThroughOptions>;
    colorpicker?: DefaultPassThrough<ColorPickerPassThroughOptions>;
    column?: DefaultPassThrough<ColumnPassThroughOptions>;
    columngroup?: DefaultPassThrough<ColumnGroupPassThroughOptions>;
    confirmdialog?: DefaultPassThrough<ConfirmDialogPassThroughOptions>;
    confirmpopup?: DefaultPassThrough<ConfirmPopupPassThroughOptions>;
    contextmenu?: DefaultPassThrough<ContextMenuPassThroughOptions>;
    datatable?: DefaultPassThrough<DataTablePassThroughOptions>;
    dataview?: DefaultPassThrough<DataViewPassThroughOptions>;
    datepicker?: DefaultPassThrough<DatePickerPassThroughOptions>;
    deferredcontent?: DefaultPassThrough<DeferredContentPassThroughOptions>;
    divider?: DefaultPassThrough<DividerPassThroughOptions>;
    dialog?: DefaultPassThrough<DialogPassThroughOptions>;
    dock?: DefaultPassThrough<DockPassThroughOptions>;
    drawer?: DefaultPassThrough<DrawerPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Select instead.
     */
    dropdown?: DefaultPassThrough<DropdownPassThroughOptions>;
    dynamicdialog?: DefaultPassThrough<DialogPassThroughOptions>;
    editor?: DefaultPassThrough<EditorPassThroughOptions>;
    fieldset?: DefaultPassThrough<FieldsetPassThroughOptions>;
    fileupload?: DefaultPassThrough<FileUploadPassThroughOptions>;
    floatlabel?: DefaultPassThrough<FloatLabelPassThroughOptions>;
    fluid?: DefaultPassThrough<FluidPassThroughOptions>;
    galleria?: DefaultPassThrough<GalleriaPassThroughOptions>;
    iconfield?: DefaultPassThrough<IconFieldPassThroughOptions>;
    iftalabel?: DefaultPassThrough<IftaLabelPassThroughOptions>;
    image?: DefaultPassThrough<ImagePassThroughOptions>;
    imagecompare?: DefaultPassThrough<ImageComparePassThroughOptions>;
    inlinemessage?: DefaultPassThrough<InlineMessagePassThroughOptions>;
    inplace?: DefaultPassThrough<InplacePassThroughOptions>;
    inputchips?: DefaultPassThrough<InputChipsPassThroughOptions>;
    inputgroup?: DefaultPassThrough<InputGroupPassThroughOptions>;
    inputgroupaddon?: DefaultPassThrough<InputGroupAddonPassThroughOptions>;
    inputicon?: DefaultPassThrough<InputIconPassThroughOptions>;
    inputmask?: DefaultPassThrough<InputMaskPassThroughOptions>;
    inputnumber?: DefaultPassThrough<InputNumberPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of ToggleSwitch instead.
     */
    inputotp?: DefaultPassThrough<InputOtpPassThroughOptions>;
    inputswitch?: DefaultPassThrough<InputSwitchPassThroughOptions>;
    inputtext?: DefaultPassThrough<InputTextPassThroughOptions>;
    knob?: DefaultPassThrough<KnobPassThroughOptions>;
    listbox?: DefaultPassThrough<ListboxPassThroughOptions>;
    megamenu?: DefaultPassThrough<MegaMenuPassThroughOptions>;
    menu?: DefaultPassThrough<MenuPassThroughOptions>;
    menubar?: DefaultPassThrough<MenubarPassThroughOptions>;
    message?: DefaultPassThrough<MessagePassThroughOptions>;
    metergroup?: DefaultPassThrough<MeterGroupPassThroughOptions>;
    multiselect?: DefaultPassThrough<MultiSelectPassThroughOptions>;
    orderlist?: DefaultPassThrough<OrderListPassThroughOptions>;
    organizationchart?: DefaultPassThrough<OrganizationChartPassThroughOptions>;
    overlaybadge?: DefaultPassThrough<OverlayBadgePassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Popover instead.
     */
    overlaypanel?: DefaultPassThrough<OverlayPanelPassThroughOptions>;
    paginator?: DefaultPassThrough<PaginatorPassThroughOptions>;
    panel?: DefaultPassThrough<PanelPassThroughOptions>;
    panelmenu?: DefaultPassThrough<PanelMenuPassThroughOptions>;
    password?: DefaultPassThrough<PasswordPassThroughOptions>;
    picklist?: DefaultPassThrough<PickListPassThroughOptions>;
    popover?: DefaultPassThrough<PopoverPassThroughOptions>;
    progressbar?: DefaultPassThrough<ProgressBarPassThroughOptions>;
    progressspinner?: DefaultPassThrough<ProgressSpinnerPassThroughOptions>;
    radiobutton?: DefaultPassThrough<RadioButtonPassThroughOptions>;
    radiobuttongroup?: DefaultPassThrough<RadioButtonGroupPassThroughOptions>;
    rating?: DefaultPassThrough<RatingPassThroughOptions>;
    row?: DefaultPassThrough<RowPassThroughOptions>;
    scrollpanel?: DefaultPassThrough<ScrollPanelPassThroughOptions>;
    scrolltop?: DefaultPassThrough<ScrollTopPassThroughOptions>;
    /**
     * @deprecated since v4. Use the new structure of Drawer instead.
     */
    sidebar?: DefaultPassThrough<SidebarPassThroughOptions>;
    skeleton?: DefaultPassThrough<SkeletonPassThroughOptions>;
    slider?: DefaultPassThrough<SliderPassThroughOptions>;
    speeddial?: DefaultPassThrough<SpeedDialPassThroughOptions>;
    selectbutton?: DefaultPassThrough<SelectButtonPassThroughOptions>;
    select?: DefaultPassThrough<SelectPassThroughOptions>;
    splitbutton?: DefaultPassThrough<SplitButtonPassThroughOptions>;
    splitter?: DefaultPassThrough<SplitterPassThroughOptions>;
    splitterpanel?: DefaultPassThrough<SplitterPanelPassThroughOptions>;
    step?: DefaultPassThrough<StepPassThroughOptions>;
    stepitem?: DefaultPassThrough<StepItemPassThroughOptions>;
    steplist?: DefaultPassThrough<StepListPassThroughOptions>;
    steppanel?: DefaultPassThrough<StepPanelPassThroughOptions>;
    steppanels?: DefaultPassThrough<StepPanelsPassThroughOptions>;
    stepper?: DefaultPassThrough<StepperPassThroughOptions>;
    steps?: DefaultPassThrough<StepsPassThroughOptions>;
    tabmenu?: DefaultPassThrough<TabMenuPassThroughOptions>;
    tabs?: DefaultPassThrough<TabsPassThroughOptions>;
    tablist?: DefaultPassThrough<TabListPassThroughOptions>;
    tab?: DefaultPassThrough<TabPassThroughOptions>;
    tabpanels?: DefaultPassThrough<TabPanelsPassThroughOptions>;
    tabpanel?: DefaultPassThrough<TabPanelPassThroughOptions>;
    /**
     * @deprecated since v4. Use tabs instead.
     */
    tabview?: DefaultPassThrough<TabViewPassThroughOptions>;
    tag?: DefaultPassThrough<TagPassThroughOptions>;
    terminal?: DefaultPassThrough<TerminalPassThroughOptions>;
    textarea?: DefaultPassThrough<TextareaPassThroughOptions>;
    tieredmenu?: DefaultPassThrough<TieredMenuPassThroughOptions>;
    timeline?: DefaultPassThrough<TimelinePassThroughOptions>;
    toast?: DefaultPassThrough<ToastPassThroughOptions>;
    togglebutton?: DefaultPassThrough<ToggleButtonPassThroughOptions>;
    toggleswitch?: DefaultPassThrough<ToggleSwitchPassThroughOptions>;
    toolbar?: DefaultPassThrough<ToolbarPassThroughOptions>;
    tree?: DefaultPassThrough<TreePassThroughOptions>;
    treeselect?: DefaultPassThrough<TreeSelectPassThroughOptions>;
    treetable?: DefaultPassThrough<TreeTablePassThroughOptions>;
    virtualscroller?: DefaultPassThrough<VirtualScrollerPassThroughOptions>;
    directives?: {
        animate?: AnimateOnScrollDirectivePassThroughOptions;
        badge?: BadgeDirectivePassThroughOptions;
        focustrap?: FocusTrapDirectivePassThroughOptions;
        keyfilter?: KeyFilterDirectivePassThroughOptions;
        ripple?: RippleDirectivePassThroughOptions;
        styleclass?: StyleClassDirectivePassThroughOptions;
        tooltip?: TooltipDirectivePassThroughOptions;
    };
    global?: {
        css?: ((options: any) => string | undefined) | string | undefined;
    };
}
