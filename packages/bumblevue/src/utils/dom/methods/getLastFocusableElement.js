import getFocusableElements from './getFocusableElements.js';

export default function getLastFocusableElement(element, selector) {
    const focusableElements = getFocusableElements(element, selector);

    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
}
