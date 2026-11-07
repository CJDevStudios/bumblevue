import getTargetElement from './getTargetElement.js';

export default function appendChild(element, child) {
    const target = getTargetElement(element, child);

    if (target) target.appendChild(child);
    else throw new Error('Cannot append ' + child + ' to ' + element);
}
