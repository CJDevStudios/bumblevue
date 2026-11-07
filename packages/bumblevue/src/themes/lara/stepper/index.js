export const root = {
    transitionDuration: '{transition.duration}'
};

export const separator = {
    background: '{content.border.color}',
    activeBackground: '{primary.color}',
    margin: '0 0 0 1.625rem',
    size: '2px'
};

export const step = {
    padding: '0.5rem',
    gap: '1rem'
};

export const stepHeader = {
    padding: '0',
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

export const stepTitle = {
    color: '{text.muted.color}',
    activeColor: '{primary.color}',
    fontWeight: '500'
};

export const stepNumber = {
    background: '{content.background}',
    activeBackground: '{primary.color}',
    borderColor: '{content.border.color}',
    activeBorderColor: '{primary.color}',
    color: '{text.muted.color}',
    activeColor: '{primary.contrast.color}',
    size: '2.25rem',
    fontSize: '1.125rem',
    fontWeight: '500',
    borderRadius: '50%',
    shadow: 'none'
};

export const steppanels = {
    padding: '0.875rem 0.5rem 1.125rem 0.5rem'
};

export const steppanel = {
    background: '{content.background}',
    color: '{content.color}',
    padding: '0',
    indent: '1rem'
};

export default {
    root,
    separator,
    step,
    stepHeader,
    stepTitle,
    stepNumber,
    steppanels,
    steppanel
};
