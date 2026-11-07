export const addon = {
    background: '{form.field.background}',
    borderColor: '{form.field.border.color}',
    color: '{form.field.icon.color}',
    borderRadius: '{form.field.border.radius}',
    padding: '0.75rem',
    minWidth: '3rem'
};

export const css = /*css*/ `
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: dt('inputtext.filled.background');
    border-inline-color: dt('inputtext.filled.background');
    background: dt('inputtext.filled.background') no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
`;

export default {
    addon,
    css
};
