/**
 *
 * IftaLabel visually integrates a label within its form element.
 *
 * [Live Demo](https://www.bumblevue.org/iftalabel/)
 *
 * @module iftalabelstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum IftaLabelClasses {
    /**
     * Class name of the root element
     */
    root = 'p-iftalabel'
}

export interface IftaLabelStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
