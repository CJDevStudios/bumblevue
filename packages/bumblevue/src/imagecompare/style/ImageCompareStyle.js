import { style } from '@cjdevstudios/bumbleuix-styles/imagecompare';
import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: 'p-imagecompare',
    slider: 'p-imagecompare-slider'
};

export default BaseStyle.extend({
    name: 'imagecompare',
    style,
    classes
});
