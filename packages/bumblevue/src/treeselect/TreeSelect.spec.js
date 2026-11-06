import { mount } from '@vue/test-utils';
import BumbleVue from '@cjdevstudios/bumblevue/config';
import TreeSelect from './TreeSelect.vue';

describe('TreeSelect.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(TreeSelect, {
            global: {
                plugins: [BumbleVue],
                stubs: {
                    teleport: true
                }
            },
            props: {
                modelValue: null,
                options: [
                    {
                        key: '0',
                        label: 'Documents',
                        children: [{ key: '0-0', label: 'Work' }]
                    }
                ]
            },
            slots: {
                dropdownicon: '<i data-dropdown-icon />',
                itemtoggleicon: '<i data-item-toggle-icon />'
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-treeselect.p-component').exists()).toBe(true);
    });

    it('should render the dropdownicon slot', () => {
        expect(wrapper.find('i[data-dropdown-icon]').exists()).toBe(true);
    });

    it('should forward the itemtoggleicon slot to the tree', async () => {
        await wrapper.setData({ overlayVisible: true });

        expect(wrapper.find('.p-tree').exists()).toBe(true);
        expect(wrapper.find('.p-tree-node-toggle-button i[data-item-toggle-icon]').exists()).toBe(true);
    });
});
