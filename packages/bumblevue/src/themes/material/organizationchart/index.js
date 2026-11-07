export const root = {
    gutter: '0.75rem',
    transitionDuration: '{transition.duration}'
};

export const node = {
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    selectedColor: '{highlight.color}',
    hoverColor: '{content.hover.color}',
    padding: '1rem 1.25rem',
    toggleablePadding: '1rem 1.25rem 1.5rem 1.25rem',
    borderRadius: '{content.border.radius}'
};

export const nodeToggleButton = {
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    borderColor: '{content.border.color}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    size: '1.75rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const connector = {
    color: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    height: '24px'
};

export const css = /*css*/ ``;

export default {
    root,
    node,
    nodeToggleButton,
    connector,
    css
};
