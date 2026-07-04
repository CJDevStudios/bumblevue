import { inject } from 'vue';

export const BumbleVueConfirmSymbol = Symbol();

export function useConfirm() {
    const BumbleVueConfirm = inject(BumbleVueConfirmSymbol);

    if (!BumbleVueConfirm) {
        throw new Error('No BumbleVue Confirmation provided!');
    }

    return BumbleVueConfirm;
}
