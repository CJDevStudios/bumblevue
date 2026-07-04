/**
 *
 * Sidebar is a panel component displayed as an overlay at the edges of the screen.
 *
 * [Live Demo](https://bumblevue.org/drawer)
 *
 * @module sidebar
 *
 */
import type { DefineComponent, EmitFn } from '@cjdevstudios/bumblevue-core';
import * as Drawer from '@cjdevstudios/bumblevue/drawer';
import 'vue';

/**
 * Custom passthrough(pt) option method.
 */
export interface SidebarPassThroughMethodOptions extends Drawer.DrawerPassThroughMethodOptions {}

/**
 * Custom shared passthrough(pt) option method.
 */
export interface SidebarSharedPassThroughMethodOptions extends Drawer.DrawerSharedPassThroughMethodOptions {}

/**
 * Custom passthrough(pt) options.
 * @see {@link SidebarProps.pt}
 */
export interface SidebarPassThroughOptions extends Drawer.DrawerPassThroughOptions {}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface SidebarPassThroughAttributes extends Drawer.DrawerPassThroughAttributes {}

/**
 * Defines current inline state in Sidebar component.
 */
export interface SidebarState extends Drawer.DrawerState {}

/**
 * Defines valid properties in Sidebar component.
 */
export interface SidebarProps extends Drawer.DrawerProps {}

/**
 * Defines valid slots in Sidebar component.
 */
export interface SidebarSlots extends Drawer.DrawerSlots {}

/**
 * Defines valid emits in Sidebar component.
 */
export interface SidebarEmitsOptions {}

export declare type SidebarEmits = EmitFn<SidebarEmitsOptions> & Drawer.DrawerEmits;

/**
 * @deprecated since v4. Use Drawer component instead.
 *
 * **BumbleVue - Sidebar**
 *
 * _Sidebar is a panel component displayed as an overlay._
 *
 * [Live Demo](https://www.bumblevue.org/drawer/)
 *
 * @group Component
 *
 */
declare const Sidebar: DefineComponent<SidebarProps, SidebarSlots, SidebarEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Sidebar: DefineComponent<SidebarProps, SidebarSlots, SidebarEmits>;
    }
}

export default Sidebar;
