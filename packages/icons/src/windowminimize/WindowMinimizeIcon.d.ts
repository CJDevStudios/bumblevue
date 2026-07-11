import type { DefineComponent } from '@cjdevstudios/bumblevue-core';
import type { Icon } from '@cjdevstudios/bumblevue-icons/baseicon';

declare class WindowMinimizeIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        WindowMinimizeIcon: DefineComponent<WindowMinimizeIcon>;
    }
}

export default WindowMinimizeIcon;
