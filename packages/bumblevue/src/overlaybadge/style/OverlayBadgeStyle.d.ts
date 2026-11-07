/**
 *
 * OverlayBadge wraps an input and an icon.
 *
 * [Live Demo](https://www.bumblevue.org/badge/)
 *
 * @module overlaybadgestyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum OverlayBadgeClasses {
    /**
     * Class name of the root element
     */
    root = 'p-overlaybadge'
}

export interface OverlayBadgeStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
