export const root = {
    transitionDuration: '{transition.duration}'
};

export const panel = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    shadow: '{overlay.popover.shadow}',
    padding: '{overlay.popover.padding}'
};

export const header = {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    padding: '0 0 0.75rem 0'
};

export const title = {
    gap: '0.5rem',
    fontWeight: '700'
};

export const dropdown = {
    width: '2.5rem',
    sm: {
        width: '2rem'
    },
    lg: {
        width: '3rem'
    },
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    }
};

export const inputIcon = {
    color: '{form.field.icon.color}'
};

export const selectMonth = {
    hoverBackground: '{content.hover.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    padding: '0.375rem 0.625rem',
    borderRadius: '{content.border.radius}'
};

export const selectYear = {
    hoverBackground: '{content.hover.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    padding: '0.375rem 0.625rem',
    borderRadius: '{content.border.radius}'
};

export const group = {
    borderColor: '{content.border.color}',
    gap: '{overlay.popover.padding}'
};

export const dayView = {
    margin: '0.75rem 0 0 0'
};

export const weekDay = {
    padding: '0.375rem',
    fontWeight: '700',
    color: '{content.color}'
};

export const date = {
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{primary.color}',
    rangeSelectedBackground: '{highlight.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{primary.contrast.color}',
    rangeSelectedColor: '{highlight.color}',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    padding: '0.375rem',
    focusRing: {
        width: '{form.field.focus.ring.width}',
        style: '{form.field.focus.ring.style}',
        color: '{form.field.focus.ring.color}',
        offset: '{form.field.focus.ring.offset}',
        shadow: '{form.field.focus.ring.shadow}'
    }
};

export const monthView = {
    margin: '0.75rem 0 0 0'
};

export const month = {
    padding: '0.5rem',
    borderRadius: '{content.border.radius}'
};

export const yearView = {
    margin: '0.75rem 0 0 0'
};

export const year = {
    padding: '0.5rem',
    borderRadius: '{content.border.radius}'
};

export const buttonbar = {
    padding: '0.75rem 0 0 0',
    borderColor: '{content.border.color}'
};

export const timePicker = {
    padding: '0.75rem 0 0 0',
    borderColor: '{content.border.color}',
    gap: '0.5rem',
    buttonGap: '0.25rem'
};

export const colorScheme = {
    light: {
        dropdown: {
            background: '{surface.50}',
            hoverBackground: '{surface.100}',
            activeBackground: '{surface.200}',
            color: '{surface.600}',
            hoverColor: '{surface.700}',
            activeColor: '{surface.800}'
        },
        today: {
            background: '{surface.200}',
            color: '{surface.900}'
        }
    },
    dark: {
        dropdown: {
            background: '{surface.800}',
            hoverBackground: '{surface.700}',
            activeBackground: '{surface.600}',
            color: '{surface.300}',
            hoverColor: '{surface.200}',
            activeColor: '{surface.100}'
        },
        today: {
            background: '{surface.700}',
            color: '{surface.0}'
        }
    }
};

export default {
    root,
    panel,
    header,
    title,
    dropdown,
    inputIcon,
    selectMonth,
    selectYear,
    group,
    dayView,
    weekDay,
    date,
    monthView,
    month,
    yearView,
    year,
    buttonbar,
    timePicker,
    colorScheme
};
