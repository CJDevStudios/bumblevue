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
    size: '1.5rem',
    borderRadius: '50%',
    borderWidth: '2px',
    background: '{primary.color}',
    content: {
        borderRadius: '50%',
        size: '0',
        background: '{primary.color}',
        insetShadow: 'none'
    }
};

export const eventConnector = {
    color: '{content.border.color}',
    size: '2px'
};

export const colorScheme = {
    light: {
        eventMarker: {
            borderColor: '{surface.0}'
        }
    },
    dark: {
        eventMarker: {
            borderColor: '{surface.900}'
        }
    }
};

export const css = /*css*/ ``;

export default {
    event,
    horizontal,
    vertical,
    eventMarker,
    eventConnector,
    colorScheme,
    css
};
