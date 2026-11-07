/**
 *
 * Ripple directive adds ripple effect to the host element.
 *
 * [Live Demo](https://bumblevue.org/ripple)
 *
 * @module ripplestyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum RippleClasses {
    /**
     * Class name of the root element
     */
    root = 'p-ink'
}

export interface RippleStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
