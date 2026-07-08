import { style } from '@cjdevstudios/bumbleuix-styles/toolbar';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: 'p-toolbar p-component',
    start: 'p-toolbar-start',
    center: 'p-toolbar-center',
    end: 'p-toolbar-end'
};

export default BaseStyle.extend({
    name: 'toolbar',
    style,
    classes
});
