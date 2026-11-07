/**
 *
 * When pressed, a floating action button can display multiple primary actions that can be performed on a page.
 *
 * [Live Demo](https://www.bumblevue.org/speeddial/)
 *
 * @module speeddialstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum SpeedDialClasses {
    /**
     * Class name of the root element
     */
    root = 'p-speeddial',
    /**
     * Class name of the button element
     */
    pcButton = 'p-speeddial-button',
    /**
     * Class name of the list element
     */
    list = 'p-speeddial-list',
    /**
     * Class name of the item element
     */
    item = 'p-speeddial-item',
    /**
     * Class name of the action element
     */
    action = 'p-speeddial-action',
    /**
     * Class name of the action icon element
     */
    actionIcon = 'p-speeddial-action-icon',
    /**
     * Class name of the mask element
     */
    mask = 'p-speeddial-mask'
}

export interface SpeedDialStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
