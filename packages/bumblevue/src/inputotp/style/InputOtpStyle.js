import { style } from '@cjdevstudios/bumbleuix-styles/inputotp';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: 'p-inputotp p-component',
    pcInputText: 'p-inputotp-input'
};

export default BaseStyle.extend({
    name: 'inputotp',
    style,
    classes
});
