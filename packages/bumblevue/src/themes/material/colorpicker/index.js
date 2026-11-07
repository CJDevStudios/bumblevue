export const root = {
    transitionDuration: '{transition.duration}'
};

export const preview = {
    width: '2rem',
    height: '2rem',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const panel = {
    shadow: '{overlay.popover.shadow}',
    borderRadius: '{overlay.popover.borderRadius}'
};

export const colorScheme = {
    light: {
        panel: {
            background: '{surface.800}',
            borderColor: '{surface.900}'
        },
        handle: {
            color: '{surface.0}'
        }
    },
    dark: {
        panel: {
            background: '{surface.900}',
            borderColor: '{surface.700}'
        },
        handle: {
            color: '{surface.0}'
        }
    }
};

export const css = /*css*/ ``;

export default {
    root,
    preview,
    panel,
    colorScheme,
    css
};
