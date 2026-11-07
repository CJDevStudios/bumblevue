/**
 *
 * InputText renders a text field to enter data.
 *
 * [Live Demo](https://www.bumblevue.org/inputtext/)
 *
 * @module inputtextstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum InputTextClasses {
    /**
     * The class of root element
     */
    root = 'p-inputtext'
}

export interface InputTextStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
