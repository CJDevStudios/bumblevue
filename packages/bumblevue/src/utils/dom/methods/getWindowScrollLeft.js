import getScrollLeft from './getScrollLeft.js';

export default function getWindowScrollLeft() {
    const doc = document.documentElement;

    return (window.pageXOffset || getScrollLeft(doc)) - (doc.clientLeft || 0);
}
