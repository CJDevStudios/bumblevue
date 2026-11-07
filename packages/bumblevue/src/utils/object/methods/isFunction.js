export default function isFunction(value) {
    return typeof value === 'function' && 'call' in value && 'apply' in value;
}
