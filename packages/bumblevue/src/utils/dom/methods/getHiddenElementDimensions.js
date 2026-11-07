export default function getHiddenElementDimensions(element) {
    const dimensions = { width: 0, height: 0 };

    if (element) {
        const [visibility, display] = [element.style.visibility, element.style.display];
        const rect = element.getBoundingClientRect();

        // Temporarily hide the element to get its dimensions
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = rect.width || element.offsetWidth;
        dimensions.height = rect.height || element.offsetHeight;
        element.style.display = display;
        element.style.visibility = visibility;
    }

    return dimensions;
}
