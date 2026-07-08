/**
 *
 * ToggleButton is used to select a boolean value using a button.
 *
 * [Live Demo](https://www.bumblevue.org/togglebutton/)
 *
 * @module togglebuttonstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue-core/base/style';

export enum ToggleButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-togglebutton',
    /**
     * Class name of the icon element
     */
    icon = 'p-togglebutton-icon',
    /**
     * Class name of the label element
     */
    label = 'p-togglebutton-label'
}

export interface ToggleButtonStyle extends BaseStyle {}
