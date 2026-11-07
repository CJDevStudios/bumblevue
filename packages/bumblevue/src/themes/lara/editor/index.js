export const toolbar = {
    borderColor: '{content.border.color}',
    borderRadius: '{content.border.radius}'
};

export const toolbarItem = {
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    activeColor: '{primary.color}'
};

export const overlay = {
    background: '{overlay.select.background}',
    borderColor: '{overlay.select.border.color}',
    borderRadius: '{overlay.select.border.radius}',
    color: '{overlay.select.color}',
    shadow: '{overlay.select.shadow}',
    padding: '{list.padding}'
};

export const overlayOption = {
    focusBackground: '{list.option.focus.background}',
    color: '{list.option.color}',
    focusColor: '{list.option.focus.color}',
    padding: '{list.option.padding}',
    borderRadius: '{list.option.border.radius}'
};

export const content = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}'
};

export const colorScheme = {
    light: {
        toolbar: {
            background: '{surface.50}'
        }
    },
    dark: {
        toolbar: {
            background: '{surface.800}'
        }
    }
};

export default {
    toolbar,
    toolbarItem,
    overlay,
    overlayOption,
    content,
    colorScheme
};
