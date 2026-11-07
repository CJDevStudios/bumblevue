export default function isRTL(element) {
    return element ? getComputedStyle(element).direction === 'rtl' : false;
}
