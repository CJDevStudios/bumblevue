/**
 *
 * Divider is used to separate contents.
 *
 * [Live Demo](https://bumblevue.org/divider)
 *
 * @module dividerstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum DividerClasses {
    /**
     * Class name of the root element
     */
    root = 'p-divider',
    /**
     * Class name of the content element
     */
    content = 'p-divider-content'
}

export interface DividerStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
