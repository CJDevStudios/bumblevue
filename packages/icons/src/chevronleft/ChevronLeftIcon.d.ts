import type { DefineComponent } from '@cjdevstudios/bumblevue-core';
import type { Icon } from '@cjdevstudios/bumblevue-icons/baseicon';

declare class ChevronLeftIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ChevronLeftIcon: DefineComponent<ChevronLeftIcon>;
    }
}

export default ChevronLeftIcon;
