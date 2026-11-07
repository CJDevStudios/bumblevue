export default function createStyleMarkup(css, attributes = {}) {
    return css ? `<style${Object.entries(attributes).reduce((s, [k, v]) => s + ` ${k}="${v}"`, '')}>${css}</style>` : '';
}
