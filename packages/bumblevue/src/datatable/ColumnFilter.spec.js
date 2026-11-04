import { FilterMatchMode } from '@cjdevstudios/bumblevue-core/api';
import { mount } from '@vue/test-utils';
import InputText from '@cjdevstudios/bumblevue/inputtext';
import { h, nextTick } from 'vue';
import Column from '../column/Column.vue';
import DataTable from './DataTable.vue';

const tick = (ms = 0) => new Promise((r) => setTimeout(r, ms));

function realClick(el) {
    el.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    el.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
    el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
}

describe('ColumnFilter nested select', () => {
    it('keeps filter overlay open after selecting a match mode', async () => {
        const wrapper = mount(DataTable, {
            attachTo: document.body,
            global: { stubs: { transition: false } },
            props: {
                value: [{ name: 'a' }, { name: 'b' }],
                filterDisplay: 'menu',
                filters: { name: { operator: 'and', constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] } }
            },
            slots: {
                default: () =>
                    h(Column, { field: 'name', header: 'Name' }, { filter: ({ filterModel }) => h(InputText, { modelValue: filterModel.value }) })
            }
        });

        await nextTick();
        realClick(document.querySelector('[data-pc-name="pcfiltermenubutton"], .p-datatable-column-filter-button'));
        await tick(50);
        const overlay = () => document.querySelector('[data-pc-section="filteroverlay"], .p-datatable-filter-overlay');
        expect(overlay()).toBeTruthy();

        const selects = overlay().querySelectorAll('.p-select');
        const matchSelect = selects[selects.length - 1];
        realClick(matchSelect);
        await tick(50);
        const options = document.querySelectorAll('[role="option"]');
        expect(options.length).toBeGreaterThan(1);
        realClick(options[1]);
        await tick(50);

        expect(overlay()).toBeTruthy();

        // clicking inside the overlay body keeps it open
        realClick(overlay());
        await tick(50);
        expect(overlay()).toBeTruthy();

        // outside click still closes
        realClick(document.body);
        await tick(50);
        expect(overlay()).toBeFalsy();
        wrapper.unmount();
    });
});
