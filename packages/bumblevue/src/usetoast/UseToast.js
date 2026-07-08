import { inject } from 'vue';

export const BumbleVueToastSymbol = Symbol();

export function useToast() {
    const BumbleVueToast = inject(BumbleVueToastSymbol);

    if (!BumbleVueToast) {
        throw new Error('No BumbleVue Toast provided!');
    }

    return BumbleVueToast;
}
