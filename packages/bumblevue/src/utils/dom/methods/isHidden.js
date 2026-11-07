import isVisible from './isVisible.js';

export default function isHidden(element) {
    return !isVisible(element);
}
