import toElement from './toElement.js';

export default function removeChild(element, child) {
    const target = toElement(element);

    if (target) target.removeChild(child);
    else throw new Error('Cannot remove ' + child + ' from ' + element);
}
