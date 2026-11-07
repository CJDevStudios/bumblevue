import BaseStyle from '@cjdevstudios/bumblevue/core/base/style';

export const style = /*css*/ `
    .p-blockui {
        position: relative;
    }

    .p-blockui-mask {
        border-radius: dt('blockui.border.radius');
    }

    .p-blockui-mask.p-overlay-mask {
        position: absolute;
    }

    .p-blockui-mask-document.p-overlay-mask {
        position: fixed;
    }
`;

const classes = {
    root: 'p-blockui'
};

export default BaseStyle.extend({
    name: 'blockui',
    style,
    classes
});
