import createElement from './createElement.js';

export default function createStyleElement(css, attributes = {}, container) {
    const element = createElement('style', attributes, css);

    container?.appendChild(element);

    return element;
}
