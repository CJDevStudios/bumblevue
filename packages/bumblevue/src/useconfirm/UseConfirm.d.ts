import type { ConfirmationOptions } from '@cjdevstudios/bumblevue/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
