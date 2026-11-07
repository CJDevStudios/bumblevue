/**
 *
 * Tag component is used to categorize content.
 *
 * [Live Demo](https://www.bumblevue.org/tag)
 *
 * @module tagstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum TagClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tag',
    /**
     * Class name of the icon element
     */
    icon = 'p-tag-icon',
    /**
     * Class name of the label element
     */
    label = 'p-tag-label'
}

export interface TagStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
