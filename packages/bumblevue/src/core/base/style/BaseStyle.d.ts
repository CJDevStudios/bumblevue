/**
 *
 * [Live Demo](https://bumblevue.org/)
 *
 * @module basestyle
 *
 */
import type { Style, StyleOptions } from '@cjdevstudios/bumblevue/core/usestyle';

export enum BaseClasses {}

export declare interface BaseStyle {
    name?: string | undefined;
    css?: string | undefined;
    classes?: object | undefined;
    inlineStyles?: object | undefined;
    load?: ((style: string | ((params?: any) => string | undefined), options?: StyleOptions) => Style | object | undefined) | undefined;
    getStyleSheet?: ((extendedCSS?: string, props?: any) => string | undefined) | undefined;
}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
