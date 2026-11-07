export const root = {
    transitionDuration: '{transition.duration}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const value = {
    background: '{primary.color}'
};

export const text = {
    color: '{text.muted.color}'
};

export const colorScheme = {
    light: {
        range: {
            background: '{surface.300}'
        }
    },
    dark: {
        range: {
            background: '{surface.600}'
        }
    }
};

export default {
    root,
    value,
    text,
    colorScheme
};
