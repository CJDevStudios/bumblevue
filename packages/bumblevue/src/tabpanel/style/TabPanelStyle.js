import BaseStyle from '@cjdevstudios/bumblevue-core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-tabpanel',
        {
            'p-tabpanel-active': instance.active
        }
    ]
};

export default BaseStyle.extend({
    name: 'tabpanel',
    classes
});
