import { $dt } from '@cjdevstudios/bumbleuix-styled';
import * as utils from '@cjdevstudios/bumbleuix-utils';

export function blockBodyScroll() {
    utils.blockBodyScroll({ variableName: $dt('scrollbar.width').name });
}

export function unblockBodyScroll() {
    utils.unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
}
