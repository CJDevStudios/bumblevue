/** @internal */
export function compare(value1, value2, comparator, order = 1) {
    let result = -1;
    const emptyValue1 = isEmpty(value1);
    const emptyValue2 = isEmpty(value2);

    if (emptyValue1 && emptyValue2) result = 0;
    else if (emptyValue1) result = order;
    else if (emptyValue2) result = -order;
    else if (typeof value1 === 'string' && typeof value2 === 'string') result = comparator(value1, value2);
    else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

    return result;
}

/** @internal */
export function contains(value, list) {
    if (value != null && list && list.length) {
        for (const val of list) {
            if (equals(value, val)) return true;
        }
    }

    return false;
}

/** @internal */
function _deepEquals(obj1, obj2, visited = new WeakSet()) {
    // Base case: same object reference
    if (obj1 === obj2) return true;

    // If one of them is null or not an object, directly return false
    if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

    // Check for circular references
    if (visited.has(obj1) || visited.has(obj2)) return false;

    // Add objects to the visited set
    visited.add(obj1).add(obj2);

    const arrObj1 = Array.isArray(obj1);
    const arrObj2 = Array.isArray(obj2);
    let i, length, key;

    if (arrObj1 && arrObj2) {
        length = obj1.length;
        if (length != obj2.length) return false;
        for (i = length; i-- !== 0;) if (!_deepEquals(obj1[i], obj2[i], visited)) return false;

        return true;
    }

    if (arrObj1 != arrObj2) return false;

    const dateObj1 = obj1 instanceof Date,
        dateObj2 = obj2 instanceof Date;

    if (dateObj1 != dateObj2) return false;
    if (dateObj1 && dateObj2) return obj1.getTime() == obj2.getTime();

    const regexpObj1 = obj1 instanceof RegExp,
        regexpObj2 = obj2 instanceof RegExp;

    if (regexpObj1 != regexpObj2) return false;
    if (regexpObj1 && regexpObj2) return obj1.toString() == obj2.toString();

    const keys = Object.keys(obj1);

    length = keys.length;

    if (length !== Object.keys(obj2).length) return false;

    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;

    for (i = length; i-- !== 0;) {
        key = keys[i];
        if (!_deepEquals(obj1[key], obj2[key], visited)) return false;
    }

    return true;
}

/** @internal */
export function deepEquals(obj1, obj2) {
    return _deepEquals(obj1, obj2);
}

/** @internal */
function _deepMerge(target = {}, source = {}) {
    const mergedObj = { ...target };

    Object.keys(source).forEach((key) => {
        const typedKey = key;

        if (isObject(source[typedKey]) && typedKey in target && isObject(target[typedKey])) {
            mergedObj[typedKey] = _deepMerge(target[typedKey], source[typedKey]);
        } else {
            mergedObj[typedKey] = source[typedKey];
        }
    });

    return mergedObj;
}

/**
 * Merges multiple objects into one.
 * @param args - Objects to merge.
 * @returns Merged object.
 * @internal
 */
export function deepMerge(...args) {
    return args.reduce((acc, obj, i) => (i === 0 ? obj : _deepMerge(acc, obj)), {});
}

/** @internal */
export function equals(obj1, obj2, field) {
    if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field);
    else return deepEquals(obj1, obj2);
}

/** @internal */
export function findIndexInList(value, list) {
    let index = -1;

    if (list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === value) {
                index = i;
                break;
            }
        }
    }

    return index;
}

/** @internal */
export function getKeyValue(obj, key = '', params = {}) {
    const fKeys = toFlatCase(key).split('.');
    const fKey = fKeys.shift();

    if (fKey) {
        if (isObject(obj)) {
            const matchedKey = Object.keys(obj).find((k) => toFlatCase(k) === fKey) || '';

            return getKeyValue(resolve(obj[matchedKey], params), fKeys.join('.'), params);
        }

        return undefined;
    }

    return resolve(obj, params);
}

/** @internal */
export function isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
}

/** @internal */
export function isDate(value) {
    return value instanceof Date;
}

/** @internal */
export function isEmpty(value) {
    return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
}

/** @internal */
export function isFunction(value) {
    return typeof value === 'function' && 'call' in value && 'apply' in value;
}

/** @internal */
export function isNumber(value) {
    return !isEmpty(value) && !isNaN(value);
}

/** @internal */
export function isObject(value, empty = true) {
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
}

/** @internal */
export function isPrintableCharacter(char = '') {
    return !isEmpty(char) && char.length === 1 && !!char.match(/\S| /);
}

/** @internal */
export function isString(value, empty = true) {
    return typeof value === 'string' && (empty || value !== '');
}

/** @internal */
export function localeComparator() {
    //performance gain using Int.Collator. It is not recommended to use localeCompare against large arrays.
    return new Intl.Collator(undefined, { numeric: true }).compare;
}

/** @internal */
export function matchRegex(str, regex) {
    if (regex) {
        const match = regex.test(str);
        regex.lastIndex = 0;
        return match;
    }

    return false;
}

/** @internal */
export function minifyCSS(css) {
    return css
        ? css
              .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')
              .replace(/ {2,}/g, ' ')
              .replace(/ ([{:}]) /g, '$1')
              .replace(/([;,]) /g, '$1')
              .replace(/ !/g, '!')
              .replace(/: /g, ':')
              .trim()
        : css;
}

/** @internal */
export function nestedKeys(obj = {}, parentKey = '') {
    return Object.entries(obj).reduce((o, [key, value]) => {
        const currentKey = parentKey ? `${parentKey}.${key}` : key;
        isObject(value) ? (o = o.concat(nestedKeys(value, currentKey))) : o.push(currentKey);
        return o;
    }, []);
}

/** @internal */
export function omit(obj, ...keys) {
    if (!isObject(obj)) return obj;
    const copy = { ...obj };
    keys?.flat().forEach((key) => delete copy[key]);
    return copy;
}

/** @internal */
export function removeAccents(str) {
    // Regular expression to check for any accented characters 'Latin-1 Supplement' and 'Latin Extended-A'
    const accentCheckRegex = /[\xC0-\xFF\u0100-\u017E]/;

    if (str && accentCheckRegex.test(str)) {
        const accentsMap = {
            A: /[\xC0-\xC5\u0100\u0102\u0104]/g,
            AE: /[\xC6]/g,
            C: /[\xC7\u0106\u0108\u010A\u010C]/g,
            D: /[\xD0\u010E\u0110]/g,
            E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,
            G: /[\u011C\u011E\u0120\u0122]/g,
            H: /[\u0124\u0126]/g,
            I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,
            IJ: /[\u0132]/g,
            J: /[\u0134]/g,
            K: /[\u0136]/g,
            L: /[\u0139\u013B\u013D\u013F\u0141]/g,
            N: /[\xD1\u0143\u0145\u0147\u014A]/g,
            O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,
            OE: /[\u0152]/g,
            R: /[\u0154\u0156\u0158]/g,
            S: /[\u015A\u015C\u015E\u0160]/g,
            T: /[\u0162\u0164\u0166]/g,
            U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,
            W: /[\u0174]/g,
            Y: /[\xDD\u0176\u0178]/g,
            Z: /[\u0179\u017B\u017D]/g,

            a: /[\xE0-\xE5\u0101\u0103\u0105]/g,
            ae: /[\xE6]/g,
            c: /[\xE7\u0107\u0109\u010B\u010D]/g,
            d: /[\u010F\u0111]/g,
            e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,
            g: /[\u011D\u011F\u0121\u0123]/g,
            i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,
            ij: /[\u0133]/g,
            j: /[\u0135]/g,
            k: /[\u0137,\u0138]/g,
            l: /[\u013A\u013C\u013E\u0140\u0142]/g,
            n: /[\xF1\u0144\u0146\u0148\u014B]/g,
            p: /[\xFE]/g,
            o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,
            oe: /[\u0153]/g,
            r: /[\u0155\u0157\u0159]/g,
            s: /[\u015B\u015D\u015F\u0161]/g,
            t: /[\u0163\u0165\u0167]/g,
            u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,
            w: /[\u0175]/g,
            y: /[\xFD\xFF\u0177]/g,
            z: /[\u017A\u017C\u017E]/g
        };

        for (const key in accentsMap) {
            str = str.replace(accentsMap[key], key);
        }
    }

    return str;
}

/** @internal */
export function reorderArray(value, from, to) {
    if (value && from !== to) {
        if (to >= value.length) {
            to %= value.length;
            from %= value.length;
        }

        value.splice(to, 0, value.splice(from, 1)[0]);
    }
}

/** @internal */
export function resolve(obj, ...params) {
    return isFunction(obj) ? obj(...params) : obj;
}

/** @internal */
export function resolveFieldData(data, field) {
    if (!data || !field) {
        // short circuit if there is nothing to resolve
        return null;
    }

    try {
        const value = data[field];

        if (!isEmpty(value)) return value;
    } catch {
        // Performance optimization: https://github.com/primefaces/primereact/issues/4797
        // do nothing and continue to other methods to resolve field data
    }

    if (Object.keys(data).length) {
        if (isFunction(field)) {
            return field(data);
        } else if (field.indexOf('.') === -1) {
            return data[field];
        } else {
            const fields = field.split('.');
            let value = data;

            for (let i = 0, len = fields.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }

                value = value[fields[i]];
            }

            return value;
        }
    }

    return null;
}

/** @internal */
export function sort(value1, value2, order = 1, comparator, nullSortOrder = 1) {
    const result = compare(value1, value2, comparator, order);
    let finalSortOrder = order;

    // nullSortOrder == 1 means Excel like sort nulls at bottom
    if (isEmpty(value1) || isEmpty(value2)) {
        finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }

    return finalSortOrder * result;
}

/** @internal */
export function toCapitalCase(str) {
    return isString(str, false) ? str[0].toUpperCase() + str.slice(1) : str;
}

/** @internal */
export function toFlatCase(str) {
    // convert snake, kebab, camel and pascal cases to flat case
    return isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
}

/** @internal */
export function toKebabCase(str) {
    // convert snake, camel and pascal cases to kebab case
    return isString(str)
        ? str
              .replace(/(_)/g, '-')
              .replace(/([a-z])([A-Z])/g, '$1-$2')
              .toLowerCase()
        : str;
}
