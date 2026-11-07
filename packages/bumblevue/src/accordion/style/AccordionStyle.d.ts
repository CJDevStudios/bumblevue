/**
 *
 * Accordion groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.bumblevue.org/accordion/)
 *
 * @module accordionstyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum AccordionClasses {
    /**
     * Class name of the root element
     */
    root = 'p-accordion'
}

export interface AccordionStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
