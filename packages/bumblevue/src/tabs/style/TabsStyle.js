import { style } from '@cjdevstudios/bumbleuix-styles/tabs';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: ({ props }) => [
        'p-tabs p-component',
        {
            'p-tabs-scrollable': props.scrollable
        }
    ]
};

export default BaseStyle.extend({
    name: 'tabs',
    style,
    classes
});
