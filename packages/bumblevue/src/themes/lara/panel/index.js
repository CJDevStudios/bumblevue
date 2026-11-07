export const root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}',
    color: '{content.color}'
};

export const header = {
    borderWidth: '0 0 1px 0',
    borderColor: '{content.border.color}',
    padding: '1.125rem',
    borderRadius: '5px 5px 0 0'
};

export const toggleableHeader = {
    padding: '0.25rem 1.125rem'
};

export const title = {
    fontWeight: '700'
};

export const content = {
    padding: '1.125rem'
};

export const footer = {
    padding: '1.125rem'
};

export const colorScheme = {
    light: {
        header: {
            background: '{surface.50}',
            color: '{text.color}'
        }
    },
    dark: {
        header: {
            background: '{surface.800}',
            color: '{text.color}'
        }
    }
};

export default {
    root,
    header,
    toggleableHeader,
    title,
    content,
    footer,
    colorScheme
};
