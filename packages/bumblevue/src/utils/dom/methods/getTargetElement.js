import isExist from './isExist.js';
import toElement from './toElement.js';

export default function getTargetElement(target, currentElement) {
    if (!target) return undefined;

    switch (target) {
        case 'document':
            return document;
        case 'window':
            return window;
        case 'body':
            return document.body;
        case '@next':
            return currentElement?.nextElementSibling;
        case '@prev':
            return currentElement?.previousElementSibling;
        case '@first':
            return currentElement?.firstElementChild;
        case '@last':
            return currentElement?.lastElementChild;
        case '@child':
            return currentElement?.children?.[0];
        case '@parent':
            return currentElement?.parentElement;
        case '@grandparent':
            return currentElement?.parentElement?.parentElement;

        default: {
            if (typeof target === 'string') {
                // child selector
                const match = target.match(/^@child\[(\d+)]/);

                if (match) {
                    return currentElement?.children?.[parseInt(match[1], 10)] || null;
                }

                return document.querySelector(target) || null;
            }

            const isFunction = (value) => typeof value === 'function' && 'call' in value && 'apply' in value;
            const computedTarget = isFunction(target) ? target() : target;
            const element = toElement(computedTarget);

            return isExist(element) ? element : computedTarget?.nodeType === 9 ? computedTarget : undefined;
        }
    }
}
