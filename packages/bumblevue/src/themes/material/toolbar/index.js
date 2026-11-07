export const root = {
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    gap: '0.5rem',
    padding: '1rem'
};

export const colorScheme = {
    light: {
        root: {
            background: '{surface.100}',
            borderColor: '{surface.100}'
        }
    },
    dark: {
        root: {
            background: '{surface.800}',
            borderColor: '{surface.800}'
        }
    }
};

export const css = /*css*/ ``;

export default {
    root,
    colorScheme,
    css
};
