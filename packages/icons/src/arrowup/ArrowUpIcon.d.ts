import type { DefineComponent } from '@cjdevstudios/bumblevue-core';
import type { Icon } from '@cjdevstudios/bumblevue-icons/baseicon';

declare class ArrowUpIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ArrowUpIcon: DefineComponent<ArrowUpIcon>;
    }
}

export default ArrowUpIcon;
