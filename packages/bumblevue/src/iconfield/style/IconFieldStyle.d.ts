/**
 *
 * IconField wraps an input and an icon.
 *
 * [Live Demo](https://www.bumblevue.org/inputtext/)
 *
 * @module iconfieldstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum IconFieldClasses {
    /**
     * Class name of the root element
     */
    root = 'p-iconfield'
}

export interface IconFieldStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
