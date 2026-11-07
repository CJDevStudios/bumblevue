export default function setCSSProperty(element, property, value = null, priority) {
    property && element?.style?.setProperty(property, value, priority);
}
