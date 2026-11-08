import { createStyleMarkup } from '@cjdevstudios/bumblevue/utils/dom';
import { isEmpty } from '@cjdevstudios/bumblevue/utils/object';

class StyleSheet {
    _styles;
    _attrs;
    constructor({ attrs } = {}) {
        this._styles = new Map();
        this._attrs = attrs || {};
    }
    get(key) {
        return this._styles.get(key);
    }
    has(key) {
        return this._styles.has(key);
    }
    delete(key) {
        this._styles.delete(key);
    }
    clear() {
        this._styles.clear();
    }
    add(key, css) {
        if (!isEmpty(css)) {
            const meta = {
                name: key,
                css,
                attrs: this._attrs,
                markup: createStyleMarkup(css, this._attrs)
            };

            this._styles.set(key, {
                ...meta,
                element: this.createStyleElement(meta)
            });
        }
    }
    update() {
        // @todo
    }
    getStyles() {
        return this._styles;
    }
    getAllCSS() {
        return [...this._styles.values()].map((style) => style.css).filter(String);
    }
    getAllMarkup() {
        return [...this._styles.values()].map((style) => style.markup).filter(String);
    }
    getAllElements() {
        return [...this._styles.values()].map((style) => style.element);
    }
    /**
     * Used to create a style element.
     *
     * @param {StyleMeta} meta
     * @returns {HTMLStyleElement | undefined}
     */
    // eslint-disable-next-line
    createStyleElement(meta = {}) {
        return undefined;
    }
}

export default StyleSheet;
