import DeferredDemo from '@/components/demo/DeferredDemo.vue';
import BumbleVueNuxtLink from '@/components/layout/BumbleVueNuxtLink';
import CodeHighlight from '@/directives/CodeHighlight';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('code', CodeHighlight);
    nuxtApp.vueApp.component('DeferredDemo', DeferredDemo); // @todo
    nuxtApp.vueApp.component('BumbleVueNuxtLink', BumbleVueNuxtLink);
});
