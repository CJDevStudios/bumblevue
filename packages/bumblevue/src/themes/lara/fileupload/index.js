export const root = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    transitionDuration: '{transition.duration}'
};

export const header = {
    borderWidth: '0 0 1px 0',
    borderColor: '{content.border.color}',
    padding: '1.125rem',
    borderRadius: '5px 5px 0 0',
    gap: '0.5rem'
};

export const content = {
    highlightBorderColor: '{primary.color}',
    padding: '1.125rem',
    gap: '1rem'
};

export const file = {
    padding: '1rem',
    gap: '1rem',
    borderColor: '{content.border.color}',
    info: {
        gap: '0.5rem'
    }
};

export const fileList = {
    gap: '0.5rem'
};

export const progressbar = {
    height: '0.25rem'
};

export const basic = {
    gap: '0.5rem'
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
    content,
    file,
    fileList,
    progressbar,
    basic,
    colorScheme
};
