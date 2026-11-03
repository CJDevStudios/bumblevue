import { defaultOptions } from '@cjdevstudios/bumblevue-core/config';
import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import AccordionContent from '../accordioncontent/AccordionContent.vue';
import AccordionHeader from '../accordionheader/AccordionHeader.vue';
import AccordionPanel from '../accordionpanel/AccordionPanel.vue';
import AccordionTab from '../accordiontab/AccordionTab.vue';
import Accordion from './Accordion.vue';

describe('Accordion.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Accordion, {
            global: {
                components: {
                    AccordionTab
                }
            },
            slots: {
                default: `
                    <AccordionTab header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </AccordionTab>
                    <AccordionTab header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </AccordionTab>
                    <AccordionTab header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </AccordionTab>`
            }
        });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should Accordion and AccordionTab component exist', () => {
        expect(wrapper.find('.p-accordion.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-accordionpanel').exists()).toBe(true);
        expect(wrapper.findAll('.p-accordionpanel').length).toBe(3);
    });

    it('should activeIndex change', async () => {
        await wrapper.setProps({ activeIndex: 1 });

        const allTabs = wrapper.findAll('.p-accordionpanel');

        expect(allTabs[0].classes()).not.toContain('p-accordionpanel-active');
        expect(allTabs[1].classes()).toContain('p-accordionpanel-active');
    });

    it('should work panel click', async () => {
        const firstHeader = wrapper.find('button.p-accordionheader');

        await firstHeader.trigger('click');

        expect(wrapper.emitted()['update:activeIndex'][0]).toEqual([0]);
        expect(wrapper.emitted()['tab-click'][0][0].index).toEqual(0);
    });
});

describe('Accordion.vue with AccordionPanel', () => {
    const panels = `
        <AccordionPanel value="0"><AccordionHeader>Header I</AccordionHeader><AccordionContent>Content I</AccordionContent></AccordionPanel>
        <AccordionPanel value="1"><AccordionHeader>Header II</AccordionHeader><AccordionContent>Content II</AccordionContent></AccordionPanel>
        <AccordionPanel value="2"><AccordionHeader>Header III</AccordionHeader><AccordionContent>Content III</AccordionContent></AccordionPanel>`;

    const mountAccordion = (props = {}, global = {}) =>
        mount(Accordion, {
            props,
            slots: { default: panels },
            global: { components: { AccordionPanel, AccordionHeader, AccordionContent }, ...global }
        });

    it('should render root pass through datasets', () => {
        const wrapper = mountAccordion({ value: '0' });
        const root = wrapper.find('.p-accordion');

        expect(root.attributes('data-pc-name')).toBe('accordion');
        expect(root.attributes('data-pc-section')).toBe('root');
    });

    it('should not render style classes when unstyled', () => {
        const wrapper = mountAccordion({ value: '0', unstyled: true });

        expect(wrapper.find('.p-accordion').exists()).toBe(false);
        expect(wrapper.find('[data-pc-name="accordion"]').exists()).toBe(true);
    });

    it('should pass state and instance to pass through functions', () => {
        const root = vi.fn(({ state, instance }) => ({ 'data-value': state.d_value, 'data-active': instance.isItemActive('1') }));
        const wrapper = mountAccordion({ value: '1', pt: { root } });
        const el = wrapper.find('[data-pc-name="accordion"]');

        expect(root).toHaveBeenCalled();
        expect(el.attributes('data-value')).toBe('1');
        expect(el.attributes('data-active')).toBe('true');
    });

    it('should call pass through lifecycle hooks', () => {
        const onCreated = vi.fn();
        const onMounted = vi.fn();
        const onUnmounted = vi.fn();
        const wrapper = mountAccordion({ value: '0', pt: { hooks: { onCreated, onMounted, onUnmounted } } });

        expect(onCreated).toHaveBeenCalledTimes(1);
        expect(onMounted).toHaveBeenCalledTimes(1);

        wrapper.unmount();

        expect(onUnmounted).toHaveBeenCalledTimes(1);
    });

    it('should apply global pass through options', () => {
        const $bumblevue = { config: { ...defaultOptions, pt: { accordion: { root: { class: 'global-pt' } } } } };
        const wrapper = mountAccordion({ value: '0' }, { mocks: { $bumblevue }, config: { globalProperties: { $bumblevue } } });

        expect(wrapper.find('.p-accordion').classes()).toContain('global-pt');
    });

    it('should toggle panels from header clicks', async () => {
        const wrapper = mountAccordion({ value: '0' });
        const headers = wrapper.findAll('button.p-accordionheader');

        await headers[1].trigger('click');

        const allPanels = wrapper.findAll('.p-accordionpanel');

        expect(allPanels[0].classes()).not.toContain('p-accordionpanel-active');
        expect(allPanels[1].classes()).toContain('p-accordionpanel-active');
        expect(wrapper.emitted()['update:value'][0]).toEqual(['1']);
        expect(wrapper.emitted()['tab-open'][0][0].index).toEqual(1);
    });

    it('should keep multiple panels open', async () => {
        const wrapper = mountAccordion({ value: ['0'], multiple: true });

        await wrapper.findAll('button.p-accordionheader')[2].trigger('click');

        expect(wrapper.findAll('.p-accordionpanel-active').length).toBe(2);
        expect(wrapper.emitted()['update:value'][0]).toEqual([['0', '2']]);
    });

    it('should move focus with the keyboard', async () => {
        const wrapper = mount(Accordion, {
            props: { value: '0' },
            slots: { default: panels },
            attachTo: document.body,
            global: { components: { AccordionPanel, AccordionHeader, AccordionContent } }
        });
        const headers = wrapper.findAll('button.p-accordionheader');

        await headers[2].trigger('keydown', { code: 'Home' });
        expect(document.activeElement).toBe(headers[0].element);

        await headers[0].trigger('keydown', { code: 'ArrowDown' });
        expect(document.activeElement).toBe(headers[1].element);

        wrapper.unmount();
    });
});
