/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * - [Live Demo](https://bumblevue.org/avatar)
 *
 * @module avatarstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum AvatarClasses {
    /**
     * Class name of the root element
     */
    root = 'p-avatar',
    /**
     * Class name of the label element
     */
    label = 'p-avatar-label',
    /**
     * Class name of the icon element
     */
    icon = 'p-avatar-icon'
}

export interface AvatarStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
