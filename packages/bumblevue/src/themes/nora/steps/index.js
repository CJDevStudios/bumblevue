export const root = {
    transitionDuration: '{transition.duration}'
};

export const separator = {
    background: '{content.border.color}'
};

export const itemLink = {
    borderRadius: '{content.border.radius}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    },
    gap: '0.5rem'
};

export const itemLabel = {
    color: '{text.muted.color}',
    activeColor: '{primary.color}',
    fontWeight: '700'
};

export const itemNumber = {
    background: '{content.background}',
    activeBackground: '{primary.color}',
    borderColor: '{content.border.color}',
    activeBorderColor: '{primary.color}',
    color: '{text.muted.color}',
    activeColor: '{primary.contrast.color}',
    size: '2rem',
    fontSize: '1.143rem',
    fontWeight: '500',
    borderRadius: '50%',
    shadow: 'none'
};

export default {
    root,
    separator,
    itemLink,
    itemLabel,
    itemNumber
};
