/**
 *
 * Utils module
 *
 * @module utils
 *
 */
export * from '@cjdevstudios/bumblevue/utils/classnames';
export * from '@cjdevstudios/bumblevue/utils/dom';
export * from '@cjdevstudios/bumblevue/utils/eventbus';
export * from '@cjdevstudios/bumblevue/utils/mergeprops';
export * from '@cjdevstudios/bumblevue/utils/object';
export * from '@cjdevstudios/bumblevue/utils/uuid';
export * from '@cjdevstudios/bumblevue/utils/zindex';

export interface BodyScrollOptions {
    className?: string;
    variableName?: string;
}

/**
 * Blocks the scrolling of the body. Without an option, the scrollbar width is set to the `scrollbar.width` design token variable of the active theme.
 */
export declare function blockBodyScroll(option?: string | BodyScrollOptions): void;
/**
 * Unblocks the scrolling of the body. Without an option, the `scrollbar.width` design token variable of the active theme is removed.
 */
export declare function unblockBodyScroll(option?: string | BodyScrollOptions): void;
