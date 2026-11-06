/**
 *
 * TabPanel is a helper component for Tabs component.
 *
 * [Live Demo](https://www.bumblevue.org/tabs/)
 *
 * @module tabpanel
 *
 */
import type { DefineComponent, DesignToken, EmitFn, PassThrough } from '@cjdevstudios/bumblevue/core';
import type { ComponentHooks } from '@cjdevstudios/bumblevue/core/basecomponent';
import type { PassThroughOptions } from '@cjdevstudios/bumblevue/passthrough';
import type { Component, VNode } from 'vue';

export declare type TabPanelPassThroughOptionType = TabPanelPassThroughAttributes | ((options: TabPanelPassThroughMethodOptions) => TabPanelPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabPanelPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TabPanelProps;
    /**
     * Defines current options.
     */
    context: TabPanelContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TabPanelProps.pt}
 */
export interface TabPanelPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabPanelPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface TabPanelPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in TabPanel component.
 */
export interface TabPanelProps {
    /**
     * Value of tabpanel.
     */
    value: string | number;
    /**
     * Use to change the HTML tag of root element.
     * @defaultValue DIV
     */
    as?: string | Component | undefined;
    /**
     * When enabled, it changes the default rendered element for the one passed as a child element.
     * @defaultValue false
     */
    asChild?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TabPanelPassThroughOptions}
     */
    pt?: PassThrough<TabPanelPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in TabPanel component.
 */
export interface TabPanelContext {
    /**
     * Whether the tab is active.
     */
    active: boolean;
}

/**
 * Defines valid slots in TabPanel slots.
 */
export interface TabPanelSlots {
    /**
     * Custom content template. Slot attributes can be used when asChild prop is true.
     */
    default(scope: {
        /**
         * Style class of the tabpanel.
         */
        class: string;
        /**
         * Whether the tab is active.
         */
        active: boolean;
        /**
         * Accessibility attributes.
         */
        a11yAttrs: any;
    }): VNode[];
}

export interface TabPanelEmitsOptions {}

export declare type TabPanelEmits = EmitFn<TabPanelEmitsOptions>;

/**
 * **BumbleVue - TabPanel**
 *
 * _TabPanel is a helper component for Tabs component._
 *
 * [Live Demo](https://www.bumblevue.org/tabs/)
 *
 * @group Component
 *
 */
declare const TabPanel: DefineComponent<TabPanelProps, TabPanelSlots, TabPanelEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        TabPanel: DefineComponent<TabPanelProps, TabPanelSlots, TabPanelEmits>;
    }
}

export default TabPanel;
