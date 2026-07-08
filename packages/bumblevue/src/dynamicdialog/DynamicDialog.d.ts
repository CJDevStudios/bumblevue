/**
 *
 * DynamicDialogs can be created dynamically with any component as the content using a DialogService.
 *
 * [Live Demo](https://bumblevue.org/dynamicdialog)
 *
 * @module dynamicdialog
 *
 */
import type { DefineComponent, EmitFn } from '@cjdevstudios/bumblevue-core';

/**
 * Defines valid properties in DynamicDialog component.
 */
export interface DynamicDialogProps {
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in DynamicDialog component.
 */
export interface DynamicDialogSlots {}

/**
 * Defines valid emits in DynamicDialog component.
 */
export interface DynamicDialogEmitsOptions {}

export declare type DynamicDialogEmits = EmitFn<DynamicDialogEmitsOptions>;

/**
 * **BumbleVue - DynamicDialog**
 *
 * _DynamicDialogs can be created dynamically with any component as the content using a DialogService._
 *
 * [Live Demo](https://www.bumblevue.org/dynamicdialog/)
 *
 * @group Component
 *
 */
declare const DynamicDialog: DefineComponent<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DynamicDialog: DefineComponent<DynamicDialogProps, DynamicDialogSlots, DynamicDialogEmits>;
    }
}

export default DynamicDialog;
