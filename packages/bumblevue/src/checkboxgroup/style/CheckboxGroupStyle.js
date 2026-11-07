import BaseStyle from '@cjdevstudios/bumblevue/core/base/style';

export const style = /*css*/ `
    .p-checkbox-group {
        display: inline-flex;
    }
`;

const classes = {
    root: 'p-checkbox-group p-component'
};

export default BaseStyle.extend({
    name: 'checkboxgroup',
    style,
    classes
});
