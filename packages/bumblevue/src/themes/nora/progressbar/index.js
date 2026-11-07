export const root = {
    borderRadius: '{content.border.radius}',
    height: '1.25rem'
};

export const value = {
    background: '{primary.color}'
};

export const label = {
    color: '{primary.contrast.color}',
    fontSize: '0.75rem',
    fontWeight: '700'
};

export const colorScheme = {
    light: {
        root: {
            background: '{surface.300}'
        }
    },
    dark: {
        root: {
            background: '{surface.600}'
        }
    }
};

export default {
    root,
    value,
    label,
    colorScheme
};
