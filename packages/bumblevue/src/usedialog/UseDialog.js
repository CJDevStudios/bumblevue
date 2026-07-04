import { inject } from 'vue';

export const BumbleVueDialogSymbol = Symbol();

export function useDialog() {
    const BumbleVueDialog = inject(BumbleVueDialogSymbol);

    if (!BumbleVueDialog) {
        throw new Error('No BumbleVue Dialog provided!');
    }

    return BumbleVueDialog;
}
