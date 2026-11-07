/**
 *
 * ImageCompare compares two images side by side with a slider.
 *
 * [Live Demo](https://www.bumblevue.org/imagecompare/)
 *
 * @module imagecomparestyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum ImageCompareClasses {
    /**
     * Class name of the root element
     */
    root = 'p-imagecompare',
    /**
     * Class name of the slider element
     */
    slider = 'p-imagecompare-slider'
}

export interface ImageCompareStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
