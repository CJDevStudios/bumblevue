const TabPanelProps = [
    {
        name: 'value',
        type: 'string|number',
        default: 'null',
        description: 'Value of tabpanel.'
    },
    {
        name: 'as',
        type: 'string|object',
        default: 'DIV',
        description: 'Use to change the HTML tag of root element.'
    },
    {
        name: 'asChild',
        type: 'boolean',
        default: 'false',
        description: 'When enabled, it changes the default rendered element for the one passed as a child element.'
    },
    {
        name: 'pt',
        type: 'any',
        default: 'null',
        description: 'Used to pass attributes to DOM elements inside the component.'
    }
];

module.exports = {
    tabpanel: {
        name: 'TabPanel',
        description: 'TabPanel is a helper component for Tabs component.',
        'doc-url': 'tabs',
        props: TabPanelProps
    }
};
