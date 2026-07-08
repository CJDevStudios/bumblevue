/**
 *
 * Fluid is a layout component to make descendant components span full width of their container.
 *
 * [Live Demo](https://www.bumblevue.org/fluid/)
 *
 * @module fluidstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue-core/base/style';

export enum FluidClasses {
    /**
     * Class name of the root element
     */
    root = 'p-fluid'
}

export interface FluidStyle extends BaseStyle {}
