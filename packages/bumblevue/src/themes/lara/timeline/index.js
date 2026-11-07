export const event = {
    minHeight: '5rem'
};

export const horizontal = {
    eventContent: {
        padding: '1rem 0'
    }
};

export const vertical = {
    eventContent: {
        padding: '0 1rem'
    }
};

export const eventMarker = {
    size: '1.125rem',
    borderRadius: '50%',
    borderWidth: '2px',
    background: '{content.background}',
    borderColor: '{primary.color}',
    content: {
        borderRadius: '50%',
        size: '0.375rem',
        background: 'transparent',
        insetShadow: 'none'
    }
};

export const eventConnector = {
    color: '{content.border.color}',
    size: '2px'
};

export default {
    event,
    horizontal,
    vertical,
    eventMarker,
    eventConnector
};
