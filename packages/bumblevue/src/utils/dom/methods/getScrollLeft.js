export default function getScrollLeft(element) {
    // for RTL scrollLeft should be negative
    return element ? Math.abs(element.scrollLeft) : 0;
}
