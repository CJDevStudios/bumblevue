/**
 *
 * Textarea is a multi-line text input element.
 *
 * [Live Demo](https://www.bumblevue.org/textarea/)
 *
 * @module textareastyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum TextareaClasses {
    /**
     * Class name of the root element
     */
    root = 'p-textarea'
}

export interface TextareaStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
