import BaseStyle from '@cjdevstudios/bumblevue/core/base/style';

export const style = /*css*/ `
    .p-radiobutton-group {
        display: inline-flex;
    }
`;

const classes = {
    root: 'p-radiobutton-group p-component'
};

export default BaseStyle.extend({
    name: 'radiobuttongroup',
    style,
    classes
});
