export const root = {
    gap: '0',
    transitionDuration: '{transition.duration}'
};

export const panel = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderWidth: '1px',
    color: '{content.color}',
    padding: '0.25rem 0.25rem',
    borderRadius: '0',
    first: {
        borderWidth: '1px 1px 0 1px',
        topBorderRadius: '{content.border.radius}'
    },
    last: {
        borderWidth: '0 1px 1px 1px',
        bottomBorderRadius: '{content.border.radius}'
    }
};

export const item = {
    focusBackground: '{navigation.item.focus.background}',
    color: '{navigation.item.color}',
    focusColor: '{navigation.item.focus.color}',
    gap: '0.5rem',
    padding: '{navigation.item.padding}',
    borderRadius: '{content.border.radius}',
    icon: {
        color: '{navigation.item.icon.color}',
        focusColor: '{navigation.item.icon.focus.color}'
    }
};

export const submenu = {
    indent: '1rem'
};

export const submenuIcon = {
    color: '{navigation.submenu.icon.color}',
    focusColor: '{navigation.submenu.icon.focus.color}'
};

export default {
    root,
    panel,
    item,
    submenu,
    submenuIcon
};
