import calculateScrollbarWidth from './calculateScrollbarWidth.js';
import getHiddenElementOuterHeight from './getHiddenElementOuterHeight.js';
import getHiddenElementOuterWidth from './getHiddenElementOuterWidth.js';
import getOffset from './getOffset.js';
import getOuterHeight from './getOuterHeight.js';
import getOuterWidth from './getOuterWidth.js';
import getViewport from './getViewport.js';

export default function nestedPosition(element, level) {
    if (element) {
        const parentItem = element.parentElement;
        const elementOffset = getOffset(parentItem);
        const viewport = getViewport();
        const sublistWidth = element.offsetParent ? element.offsetWidth : getHiddenElementOuterWidth(element);
        const sublistHeight = element.offsetParent ? element.offsetHeight : getHiddenElementOuterHeight(element);
        const itemOuterWidth = getOuterWidth(parentItem?.children?.[0]);
        const itemOuterHeight = getOuterHeight(parentItem?.children?.[0]);

        let left = '';
        let top;

        if (elementOffset.left + itemOuterWidth + sublistWidth > viewport.width - calculateScrollbarWidth()) {
            if (elementOffset.left < sublistWidth) {
                // for too small screens
                if (level % 2 === 1) {
                    left = elementOffset.left ? '-' + elementOffset.left + 'px' : '100%';
                } else if (level % 2 === 0) {
                    left = viewport.width - sublistWidth - calculateScrollbarWidth() + 'px';
                }
            } else {
                left = '-100%';
            }
        } else {
            left = '100%';
        }

        // getBoundingClientRect returns a top position from the current visible viewport area
        if (element.getBoundingClientRect().top + itemOuterHeight + sublistHeight > viewport.height) {
            top = `-${sublistHeight - itemOuterHeight}px`;
        } else {
            top = '0px';
        }

        element.style.top = top;
        element.style.insetInlineStart = left;
    }
}
