import isElement from './isElement.js';

export default function toElement(element) {
    let target = element;

    if (element && typeof element === 'object') {
        if (Object.hasOwn(element, 'current')) {
            // For React
            target = element.current;
        } else if (Object.hasOwn(element, 'el')) {
            if (Object.hasOwn(element.el, 'nativeElement')) {
                // For Angular
                target = element.el.nativeElement;
            } else {
                // For Vue
                target = element.el;
            }
        }
    }

    return isElement(target) ? target : undefined;
}
