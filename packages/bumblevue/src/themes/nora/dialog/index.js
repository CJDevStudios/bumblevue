export const root = {
    background: '{overlay.modal.background}',
    borderColor: '{overlay.modal.border.color}',
    color: '{overlay.modal.color}',
    borderRadius: '{overlay.modal.border.radius}',
    shadow: '{overlay.modal.shadow}'
};

export const header = {
    padding: '{overlay.modal.padding}',
    gap: '0.5rem'
};

export const title = {
    fontSize: '1.25rem',
    fontWeight: '700'
};

export const content = {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}'
};

export const footer = {
    padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}',
    gap: '0.5rem'
};

export default {
    root,
    header,
    title,
    content,
    footer
};
