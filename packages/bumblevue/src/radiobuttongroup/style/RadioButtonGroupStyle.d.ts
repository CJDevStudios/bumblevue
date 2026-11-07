/**
 *
 * RadioButtonGroup is a component that groups multiple radio buttons, allowing users to select only one option from the group.
 *
 * [Live Demo](https://www.bumblevue.org/radiobuttongroup/)
 *
 * @module radiobuttongroupstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum RadioButtonGroupClasses {
    /**
     * Class name of the root element
     */
    root = 'p-radiobutton-group'
}

export interface RadioButtonGroupStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
