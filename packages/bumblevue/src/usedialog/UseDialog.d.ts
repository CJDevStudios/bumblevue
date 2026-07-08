import type { DynamicDialogInstance, DynamicDialogOptions } from '@cjdevstudios/bumblevue/dynamicdialogoptions';

export declare function useDialog(): {
    open: (content: any, options?: DynamicDialogOptions) => DynamicDialogInstance;
};
