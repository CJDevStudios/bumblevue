import createStyleElement from './createStyleElement.js';

/**
 * @deprecated Use `createStyleElement` instead.
 */
export default function createStyleTag(attributes = {}, container) {
    return createStyleElement('', attributes, container || document.head);
}
