import findSingle from './findSingle.js';
import getParents from './getParents.js';

export default function getScrollableParents(element) {
    const scrollableParents = [];

    if (element) {
        const parents = getParents(element);
        const overflowRegex = /(auto|scroll)/;

        const overflowCheck = (node) => {
            try {
                const styleDeclaration = window['getComputedStyle'](node, null);

                return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
            } catch {
                return false;
            }
        };

        for (const parent of parents) {
            const scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];

            if (scrollSelectors) {
                const selectors = scrollSelectors.split(',');

                for (const selector of selectors) {
                    const el = findSingle(parent, selector);

                    if (el && overflowCheck(el)) {
                        scrollableParents.push(el);
                    }
                }
            }

            if (parent.nodeType !== 9 && overflowCheck(parent)) {
                scrollableParents.push(parent);
            }
        }
    }

    return scrollableParents;
}
