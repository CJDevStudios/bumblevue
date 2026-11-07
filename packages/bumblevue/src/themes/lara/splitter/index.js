export const root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    transitionDuration: '{transition.duration}'
};

export const gutter = {
    background: '{content.border.color}'
};

export const handle = {
    size: '24px',
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const colorScheme = {
    light: {
        handle: {
            background: '{surface.400}'
        }
    },
    dark: {
        handle: {
            background: '{surface.600}'
        }
    }
};

export default {
    root,
    gutter,
    handle,
    colorScheme
};
