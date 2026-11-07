export default function invokeElementMethod(element, methodName, args) {
    const method = element[methodName];

    if (typeof method === 'function') {
        method.apply(element, args ?? []);
    }
}
