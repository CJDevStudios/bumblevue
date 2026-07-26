import { mount } from '@vue/test-utils';
import BumbleVue from '@cjdevstudios/bumblevue/config';
import Paginator from './Paginator.vue';

describe('Paginator.vue', () => {
    let wrapper;

    beforeAll(() => {
        document.body.appendChild(document.createElement('div')).setAttribute('id', 'test_container');
    });

    beforeEach(() => {
        wrapper = mount(Paginator, {
            global: {
                plugins: [BumbleVue]
            },
            attachTo: '#test_container',
            props: {
                rows: 10,
                totalRecords: 120,
                rowsPerPageOptions: [10, 20, 30]
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-paginator.p-component').exists()).toBe(true);
        expect(wrapper.findAll('.p-paginator-page').length).toBe(5);
        expect(wrapper.find('.p-select.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-select-label').text()).toBe('10');
        expect(wrapper.find('.p-paginator-first').classes()).toContain('p-disabled');
        expect(wrapper.find('.p-paginator-prev').classes()).toContain('p-disabled');
        expect(wrapper.vm.pageCount).toBe(12);
    });

    it('show jump to the end', async () => {
        await wrapper.vm.changePageToLast({ preventDefault: () => {} });

        expect(wrapper.findAll('.p-paginator-page')[4].classes()).toContain('p-paginator-page-selected');
        expect(wrapper.findAll('.p-paginator-page')[4].text()).toBe('12');
        expect(wrapper.find('.p-paginator-next').classes()).toContain('p-disabled');
        expect(wrapper.find('.p-paginator-last').classes()).toContain('p-disabled');
    });

    it('should change row count', async () => {
        await wrapper.vm.onRowChange(20);

        expect(wrapper.vm.d_rows).toBe(20);
        expect(wrapper.emitted()['update:rows'][0]).toEqual([20]);
        expect(wrapper.vm.pageCount).toBe(6);

        await wrapper.setProps({ rows: 20 });

        expect(wrapper.find('.p-select-label').text()).toBe('20');
    });

    it('selectAppendTo should be passed to the rows and jump selects', async () => {
        await wrapper.setProps({
            selectAppendTo: '#test_container',
            rows: 10,
            totalRecords: 120,
            rowsPerPageOptions: [10, 20, 30],
            template: {
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown JumpToPageDropdown'
            }
        });

        expect(wrapper.getComponent({ name: "RowsPerPageDropdown" }).props().appendTo).toBe('#test_container');
        expect(wrapper.getComponent({ name: "JumpToPageDropdown" }).props().appendTo).toBe('#test_container');
    });
});
