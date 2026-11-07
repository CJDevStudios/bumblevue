import addClass from '../methods/addClass.js';
import calculateBodyScrollbarWidth from '../methods/calculateBodyScrollbarWidth.js';

export default function blockBodyScroll(option) {
    if (typeof option === 'string') {
        addClass(document.body, option || 'p-overflow-hidden');
    } else {
        option?.variableName && document.body.style.setProperty(option.variableName, calculateBodyScrollbarWidth() + 'px');
        addClass(document.body, option?.className || 'p-overflow-hidden');
    }
}
