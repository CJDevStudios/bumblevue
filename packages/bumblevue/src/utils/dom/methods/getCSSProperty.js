export default function getCSSProperty(element, property, inline) {
    if (element && property) {
        return inline ? element?.style?.getPropertyValue(property) : getComputedStyle(element).getPropertyValue(property);
    }

    return null;
}
