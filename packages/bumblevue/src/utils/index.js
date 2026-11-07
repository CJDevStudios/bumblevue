import { $dt } from '@cjdevstudios/bumblevue/styled';
import { blockBodyScroll as _blockBodyScroll, unblockBodyScroll as _unblockBodyScroll } from '@cjdevstudios/bumblevue/utils/dom';

export * from '@cjdevstudios/bumblevue/utils/classnames';
export * from '@cjdevstudios/bumblevue/utils/dom';
export * from '@cjdevstudios/bumblevue/utils/eventbus';
export * from '@cjdevstudios/bumblevue/utils/mergeprops';
export * from '@cjdevstudios/bumblevue/utils/object';
export * from '@cjdevstudios/bumblevue/utils/uuid';
export * from '@cjdevstudios/bumblevue/utils/zindex';

// Without an option, the scrollbar width is set to the `scrollbar.width` design token variable of the active theme
export function blockBodyScroll(option) {
    _blockBodyScroll(option ?? { variableName: $dt('scrollbar.width').name });
}

export function unblockBodyScroll(option) {
    _unblockBodyScroll(option ?? { variableName: $dt('scrollbar.width').name });
}
