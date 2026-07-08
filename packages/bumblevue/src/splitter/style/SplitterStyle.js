import { style } from '@cjdevstudios/bumbleuix-styles/splitter';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: ({ props }) => ['p-splitter p-component', 'p-splitter-' + props.layout],
    gutter: 'p-splitter-gutter',
    gutterHandle: 'p-splitter-gutter-handle'
};

export default BaseStyle.extend({
    name: 'splitter',
    style,
    classes
});
