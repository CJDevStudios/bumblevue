import type { DefineComponent } from '@cjdevstudios/bumblevue-core';
import type { Icon } from '@cjdevstudios/bumblevue-icons/baseicon';

declare class RefreshIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        RefreshIcon: DefineComponent<RefreshIcon>;
    }
}

export default RefreshIcon;
