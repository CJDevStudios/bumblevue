/**
 *
 * A set of Buttons can be displayed together using the ButtonGroup component.
 *
 * [Live Demo](https://www.bumblevue.org/button/)
 *
 * @module buttongroupstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum ButtonGroupClasses {
    /**
     * Class name of the root element
     */
    root = 'p-buttongroup'
}

export interface ButtonGroupStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
