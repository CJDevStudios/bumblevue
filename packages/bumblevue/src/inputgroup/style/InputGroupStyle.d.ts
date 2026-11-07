/**
 *
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.bumblevue.org/inputgroup/)
 *
 * @module inputgroupstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum InputGroupClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inputgroup'
}

export interface InputGroupStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
