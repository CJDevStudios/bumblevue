import equals from './equals.js';

export default function contains(value, list) {
    if (value != null && list && list.length) {
        for (const val of list) {
            if (equals(value, val)) return true;
        }
    }

    return false;
}
