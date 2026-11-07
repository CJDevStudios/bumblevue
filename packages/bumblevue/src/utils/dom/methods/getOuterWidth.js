export default function getOuterWidth(element, margin) {
    if (element instanceof HTMLElement) {
        let width = element.offsetWidth;

        if (margin) {
            const style = getComputedStyle(element);

            width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
    }

    return 0;
}
