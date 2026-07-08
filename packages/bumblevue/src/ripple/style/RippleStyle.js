import { style } from '@cjdevstudios/bumbleuix-styles/ripple';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: 'p-ink'
};

export default BaseStyle.extend({
    name: 'ripple-directive',
    style,
    classes
});
