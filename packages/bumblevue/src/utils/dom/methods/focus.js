export default function focus(element, options) {
    if (element && document.activeElement !== element) element.focus(options);
}
