import { defaultOptions } from '@cjdevstudios/bumblevue-core/config';
import { mount } from '@vue/test-utils';
import { expect, it } from 'vitest';
import AccordionContent from '../accordioncontent/AccordionContent.vue';
import AccordionHeader from '../accordionheader/AccordionHeader.vue';
import AccordionPanel from '../accordionpanel/AccordionPanel.vue';
import Accordion from './Accordion.vue';

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
