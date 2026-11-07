export default function clearSelection() {
    if (window.getSelection) {
        const selection = window.getSelection() || {};

        if (selection.empty) {
            selection.empty();
        } else if (selection.removeAllRanges && selection.rangeCount > 0 && selection.getRangeAt(0).getClientRects().length > 0) {
            selection.removeAllRanges();
        }
    }
}
