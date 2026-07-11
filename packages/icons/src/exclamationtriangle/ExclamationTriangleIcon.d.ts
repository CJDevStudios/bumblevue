import type { DefineComponent } from '@cjdevstudios/bumblevue-core';
import type { Icon } from '@cjdevstudios/bumblevue-icons/baseicon';

declare class ExclamationTriangleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ExclamationTriangleIcon: DefineComponent<ExclamationTriangleIcon>;
    }
}

export default ExclamationTriangleIcon;
