import getCSSVariableByRegex from './getCSSVariableByRegex.js';
import getHiddenElementDimensions from './getHiddenElementDimensions.js';
import getViewport from './getViewport.js';
import getWindowScrollLeft from './getWindowScrollLeft.js';
import getWindowScrollTop from './getWindowScrollTop.js';
import isRTL from './isRTL.js';

export default function absolutePosition(element, target, gutter = true) {
    if (element) {
        const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : getHiddenElementDimensions(element);
        const elementOuterHeight = elementDimensions.height;
        const elementOuterWidth = elementDimensions.width;
        const targetOuterHeight = target.offsetHeight;
        const targetOuterWidth = target.offsetWidth;
        const targetOffset = target.getBoundingClientRect();
        const windowScrollTop = getWindowScrollTop();
        const windowScrollLeft = getWindowScrollLeft();
        const viewport = getViewport();
        let top,
            left,
            origin = 'top';

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
            top = targetOffset.top + windowScrollTop - elementOuterHeight;
            origin = 'bottom';

            if (top < 0) {
                top = windowScrollTop;
            }
        } else {
            top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }

        if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else left = targetOffset.left + windowScrollLeft;

        if (isRTL(element)) {
            element.style.insetInlineEnd = left + 'px';
        } else {
            element.style.insetInlineStart = left + 'px';
        }

        element.style.top = top + 'px';
        element.style.transformOrigin = origin;
        if (gutter) element.style.marginTop = origin === 'bottom' ? `calc(${getCSSVariableByRegex(/-anchor-gutter$/)?.value ?? '2px'} * -1)` : (getCSSVariableByRegex(/-anchor-gutter$/)?.value ?? '');
    }
}
