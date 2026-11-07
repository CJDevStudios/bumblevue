/**
 *
 * Skeleton is a placeholder to display instead of the actual content.
 *
 * [Live Demo](https://www.bumblevue.org/skeleton/)
 *
 * @module skeletonstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum SkeletonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-skeleton'
}

export interface SkeletonStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
