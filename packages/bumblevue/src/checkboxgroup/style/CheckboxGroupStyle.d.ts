/**
 *
 * CheckboxGroup is a component that groups multiple checkboxes, allowing users to select one or more options.
 *
 * [Live Demo](https://www.bumblevue.org/checkbox/)
 *
 * @module checkboxgroupstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum CheckboxGroupClasses {
    /**
     * Class name of the root element
     */
    root = 'p-checkbox-group'
}

export interface CheckboxGroupStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
