export const root = {
    transitionDuration: '{transition.duration}'
};

export const track = {
    borderRadius: '{content.border.radius}',
    size: '3px'
};

export const range = {
    background: '{primary.color}'
};

export const handle = {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: '{primary.color}',
    hoverBackground: '{primary.color}',
    content: {
        borderRadius: '50%',
        background: '{primary.color}',
        hoverBackground: '{primary.color}',
        width: '12px',
        height: '12px',
        shadow: 'none'
    },
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
        track: {
            background: '{surface.300}'
        }
    },
    dark: {
        track: {
            background: '{surface.600}'
        }
    }
};

export default {
    root,
    track,
    range,
    handle,
    colorScheme
};
