/**
 *
 * Stepper is a component that streamlines a wizard-like workflow, organizing content into coherent steps and visually guiding users through a numbered progression in a multi-step process.
 *
 * [Live Demo](https://www.bumblevue.org/stepper/)
 *
 * @module stepperstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue-core/base/style';

export enum StepperClasses {
    /**
     * Class name of the root element
     */
    root = 'p-stepper',
    /**
     * Class name of the separator element
     */
    separator = 'p-stepper-separator'
}

export interface StepperStyle extends BaseStyle {}
