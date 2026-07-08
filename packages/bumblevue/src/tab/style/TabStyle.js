import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-tab',
        {
            'p-tab-active': instance.active,
            'p-disabled': props.disabled
        }
    ]
};

export default BaseStyle.extend({
    name: 'tab',
    classes
});
