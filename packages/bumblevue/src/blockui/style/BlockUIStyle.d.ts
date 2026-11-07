/**
 *
 * BlockUI represents people using icons, labels and images.
 *
 * [Live Demo](https://www.bumblevue.org/blockui)
 *
 * @module blockuistyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum BlockUIClasses {
    /**
     * Class name of the root element
     */
    root = 'p-blockui'
}

export interface BlockUIStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
