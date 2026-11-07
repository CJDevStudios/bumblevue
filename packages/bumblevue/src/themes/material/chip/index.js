export const root = {
    borderRadius: '2rem',
    paddingX: '0.75rem',
    paddingY: '0.75rem',
    gap: '0.5rem',
    transitionDuration: '{transition.duration}'
};

export const image = {
    width: '2.25rem',
    height: '2.25rem'
};

export const icon = {
    size: '1rem'
};

export const removeIcon = {
    size: '1rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}'
    }
};

export const colorScheme = {
    light: {
        root: {
            background: '{surface.200}',
            color: '{surface.900}'
        },
        icon: {
            color: '{surface.600}'
        },
        removeIcon: {
            color: '{surface.600}',
            focusRing: {
                shadow: '0 0 1px 4px {surface.300}'
            }
        }
    },
    dark: {
        root: {
            background: '{surface.700}',
            color: '{surface.0}'
        },
        icon: {
            color: '{surface.0}'
        },
        removeIcon: {
            color: '{surface.0}',
            focusRing: {
                shadow: '0 0 1px 4px {surface.600}'
            }
        }
    }
};

export const css = /*css*/ ``;

export default {
    root,
    image,
    icon,
    removeIcon,
    colorScheme,
    css
};
