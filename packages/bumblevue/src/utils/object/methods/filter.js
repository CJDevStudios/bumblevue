import resolveFieldData from './resolveFieldData.js';

export default function filter(value, fields, filterValue) {
    const filteredItems = [];

    if (value) {
        for (const item of value) {
            for (const field of fields) {
                if (String(resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                    filteredItems.push(item);
                    break;
                }
            }
        }
    }

    return filteredItems;
}
