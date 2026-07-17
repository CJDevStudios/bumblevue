import { MetaType, toMeta } from '../index';

export const composables: MetaType[] = toMeta([
    { name: 'useBumbleVue', as: 'useBumbleVue', from: '@cjdevstudios/bumblevue/config' },
    { name: 'useStyle', as: 'useStyle', from: '@cjdevstudios/bumblevue/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: '@cjdevstudios/bumblevue/useconfirm' },
    { name: 'useToast', as: 'useToast', from: '@cjdevstudios/bumblevue/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: '@cjdevstudios/bumblevue/usedialog' }
]);
