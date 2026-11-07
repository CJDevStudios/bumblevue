/**
 *
 * FloatLabel visually integrates a label with its form element.
 *
 * [Live Demo](https://www.bumblevue.org/floatlabel/)
 *
 * @module floatlabelstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum FloatLabelClasses {
    /**
     * Class name of the root element
     */
    root = 'p-floatlabel'
}

export interface FloatLabelStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
