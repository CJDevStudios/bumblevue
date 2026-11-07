/**
 *
 * PickList is used to reorder items between different lists.
 *
 * [Live Demo](https://bumblevue.org/picklist)
 *
 * @module pickliststyle
 *
 */
import type { BaseStyle } from '@cjdevstudios/bumblevue/core/base/style';

export enum PickListClasses {
    /**
     * Class name of the root element
     */
    root = 'p-picklist',
    /**
     * Class name of the source controls element
     */
    sourceControls = 'p-picklist-source-controls',
    /**
     * Class name of the source list container element
     */
    sourceListContainer = 'p-picklist-source-list-container',
    /**
     * Class name of the transfer controls element
     */
    transferControls = 'p-picklist-transfer-controls',
    /**
     * Class name of the target list container element
     */
    targetListContainer = 'p-picklist-target-list-container',
    /**
     * Class name of the target controls element
     */
    targetControls = 'p-picklist-target-controls'
}

export interface PickListStyle extends BaseStyle {}

/**
 * The styled mode CSS of the component. Design tokens are referenced with `dt()` and resolved when the style is loaded.
 */
export declare const style: string;
