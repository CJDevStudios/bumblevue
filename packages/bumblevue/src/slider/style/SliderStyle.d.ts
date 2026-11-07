/**
 *
 * Slider is a component to provide input with a drag handle.
 *
 * [Live Demo](https://www.bumblevue.org/slider/)
 *
 * @module sliderstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum SliderClasses {
    /**
     * Class name of the root element
     */
    root = 'p-slider',
    /**
     * Class name of the range element
     */
    range = 'p-slider-range',
    /**
     * Class name of the handle element
     */
    handle = 'p-slider-handle'
}

export interface SliderStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
