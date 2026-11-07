import absolutePosition from './absolutePosition.js';
import getOuterWidth from './getOuterWidth.js';
import relativePosition from './relativePosition.js';

export default function alignOverlay(overlay, target, appendTo, calculateMinWidth = true) {
    if (overlay && target) {
        if (appendTo === 'self') {
            relativePosition(overlay, target);
        } else {
            if (calculateMinWidth) overlay.style.minWidth = getOuterWidth(target) + 'px';
            absolutePosition(overlay, target);
        }
    }
}
