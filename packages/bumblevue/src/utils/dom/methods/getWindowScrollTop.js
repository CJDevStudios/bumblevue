export default function getWindowScrollTop() {
    const doc = document.documentElement;

    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}
