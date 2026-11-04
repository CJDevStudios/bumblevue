const AccordionProps = [
    {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, multiple tabs can be activated at the same time.'
    },
    {
        name: 'lazy',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css.'
    },
    {
        name: 'expandIcon',
        type: 'string',
        default: 'null',
        description: 'Icon of a collapsed tab.'
    },
    {
        name: 'collapseIcon',
        type: 'string',
        default: 'null',
        description: 'Icon of a expanded tab.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: '0',
        description: 'Index of the element in tabbing order.'
    },
    {
        name: 'selectOnFocus',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, the focused tab is activated.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    },
    {
        name: 'unstyled',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it removes component related styles in the core.'
    }
];

const AccordioneSlots = [
    {
        name: 'default',
        description: 'Custom template.'
    },
    {
        name: 'collapseicon',
        description: 'Custom collapse icon template.'
    },
    {
        name: 'expandicon',
        description: 'Custom expand icon template.'
    }
];

module.exports = {
    accordion: {
        name: 'Accordion',
        description: 'Accordion groups a collection of contents in tabs.',
        props: AccordionProps,
        slots: AccordioneSlots
    }
};
