import { style } from '@cjdevstudios/bumbleuix-styles/popover';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    style,
    classes
});
