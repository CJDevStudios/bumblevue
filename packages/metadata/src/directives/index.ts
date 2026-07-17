import { MetaType, toMeta } from '../index';

export const directives: MetaType[] = toMeta([
    { name: 'badge', as: 'BadgeDirective', from: '@cjdevstudios/bumblevue/badgedirective' },
    { name: 'tooltip', as: 'Tooltip', from: '@cjdevstudios/bumblevue/tooltip' },
    { name: 'ripple', as: 'Ripple', from: '@cjdevstudios/bumblevue/ripple' },
    { name: 'styleclass', as: 'StyleClass', from: '@cjdevstudios/bumblevue/styleclass' },
    { name: 'focustrap', as: 'FocusTrap', from: '@cjdevstudios/bumblevue/focustrap' },
    { name: 'animateonscroll', as: 'AnimateOnScroll', from: '@cjdevstudios/bumblevue/animateonscroll' },
    { name: 'keyfilter', as: 'KeyFilter', from: '@cjdevstudios/bumblevue/keyfilter' }
]);
