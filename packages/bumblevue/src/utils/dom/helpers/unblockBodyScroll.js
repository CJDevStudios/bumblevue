import removeClass from '../methods/removeClass.js';

export default function unblockBodyScroll(option) {
    if (typeof option === 'string') {
        removeClass(document.body, option || 'p-overflow-hidden');
    } else {
        if (option?.variableName) document.body.style.removeProperty(option.variableName);
        removeClass(document.body, option?.className || 'p-overflow-hidden');
    }
}
