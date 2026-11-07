/**
 *
 * Tabs facilitates seamless switching between different views.
 *
 * [Live Demo](https://www.bumblevue.org/tabs/)
 *
 * @module tabsstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum TabsClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tabs'
}

export interface TabsStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
