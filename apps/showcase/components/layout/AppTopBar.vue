<template>
    <div :ref="containerRef" class="layout-topbar">
        <div class="layout-topbar-inner">
            <div class="layout-topbar-logo-container">
                <BumbleVueNuxtLink to="/" class="layout-topbar-logo" aria-label="PrimeVue logo">
                    <img src="/logo-icon.webp" width="64" class="block dark:hidden" aria-hidden="true" />
                    <img src="/logo-icon-dark.webp" width="64" class="hidden dark:block" aria-hidden="true" />
                    <span class="content-center text-3xl font-bold text-yellow-700 dark:text-yellow-500">BumbleVue</span>
                </BumbleVueNuxtLink>
                <BumbleVueNuxtLink to="/" class="layout-topbar-icon" aria-label="PrimeVue logo">
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                            fill="var(--logo-color)"
                        />
                        <path
                            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                            fill="var(--high-contrast-text-color)"
                        />
                    </svg>
                </BumbleVueNuxtLink>
            </div>

            <ul class="topbar-items">
                <li>
                    <div id="docsearch"></div>
                </li>
                <li>
                    <a href="https://github.com/CJDevStudios/bumblevue" target="_blank" rel="noopener noreferrer" class="topbar-item">
                        <i class="pi pi-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/CJDevStudios/bumblevue/discussions" target="_blank" rel="noopener noreferrer" class="topbar-item">
                        <i class="pi pi-comments"></i>
                    </a>
                </li>
                <li>
                    <button type="button" class="topbar-item" @click="toggleDarkMode">
                        <i :class="['pi', { 'pi-moon': $appState.darkTheme, 'pi-sun': !$appState.darkTheme }]"></i>
                    </button>
                </li>
                <li>
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'px-overlay-enter-active', leaveToClass: 'hidden', leaveActiveClass: 'px-overlay-leave-active', hideOnOutsideClick: true }"
                        type="button"
                        class="topbar-item config-item"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </li>
                <li>
                    <button type="button" class="topbar-item relative group overflow-hidden !border-transparent" @click="toggleDesigner">
                        <span
                            style="animation-duration: 2s; background: conic-gradient(from 90deg, #f97316, #f59e0b, #eab308, #84cc16, #22c55e, #10b981, #14b8a6, #06b6d4, #0ea5e9, #3b82f6, #6366f1, #8b5cf6, #a855f7, #d946ef, #ec4899, #f43f5e)"
                            class="absolute -top-5 -left-5 w-20 h-20 animate-spin"
                        ></span>
                        <span style="inset: 1px; border-radius: 4px" class="absolute z-2 bg-surface-0 dark:bg-surface-900 transition-all"></span>
                        <i class="pi pi-cog z-10"></i>
                    </button>
                </li>
                <li>
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'px-overlay-enter-active', leaveToClass: 'hidden', leaveActiveClass: 'px-overlay-leave-active', hideOnOutsideClick: true }"
                        type="button"
                        style="max-width: 8rem"
                        class="topbar-item version-item"
                    >
                        <span class="version-text">{{ versions[0].name }}</span>
                        <span class="version-icon pi pi-angle-down"></span>
                    </button>

                    <div class="versions-panel hidden">
                        <ul>
                            <li v-for="version in versions" :key="version.version" role="none">
                                <a :href="version.url">
                                    <span>PrimeVue {{ version.name }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li v-if="showMenuButton" class="menu-button">
                    <button type="button" class="topbar-item menu-button" @click="onMenuButtonClick" aria-haspopup aria-label="Menu">
                        <i class="pi pi-bars"></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import EventBus from '@/app/AppEventBus';
import docsearch from '@docsearch/js';

export default {
    emits: ['menubutton-click'],
    outsideClickListener: null,
    props: {
        showMenuButton: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            versions: [
                {
                    name: 'v4',
                    url: '/'
                }
            ]
        };
    },
    scrollListener: null,
    container: null,
    mounted() {
        this.bindScrollListener();

        docsearch({
            container: '#docsearch',
            appId: '01CMUF4W4R',
            indexName: 'primevue',
            apiKey: '9bb5939e36897b26ff7de5b7b64d6c43',
            transformItems: (items) => {
                const isLocalhost = process.env.NODE_ENV !== 'production';

                return items.map((item) => {
                    if (isLocalhost) {
                        const url = new URL(item.url);

                        url.protocol = window.location.protocol;
                        url.hostname = window.location.hostname;
                        url.port = window.location.port;
                        item.url = url.toString();
                    }

                    return item;
                });
            }
        });
    },
    beforeUnmount() {
        if (this.scrollListener) {
            this.unbindScrollListener();
        }
    },
    methods: {
        onMenuButtonClick(event) {
            this.$emit('menubutton-click', event);
        },
        toggleDarkMode() {
            EventBus.emit('dark-mode-toggle', { dark: !this.$appState.darkTheme });
        },
        bindScrollListener() {
            if (!this.scrollListener) {
                if (this.container) {
                    this.scrollListener = () => {
                        if (window.scrollY > 0) this.container.classList.add('layout-topbar-sticky');
                        else this.container.classList.remove('layout-topbar-sticky');
                    };
                }
            }

            window.addEventListener('scroll', this.scrollListener);
        },
        unbindScrollListener() {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.isOutsideTopbarMenuClicked(event)) {
                        this.unbindOutsideClickListener();
                    }
                };

                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideTopbarMenuClicked(event) {
            return !(this.$refs.topbarMenu.isSameNode(event.target) || this.$refs.topbarMenu.contains(event.target));
        },
        containerRef(el) {
            this.container = el;
        },
        toggleDesigner() {
            this.$appState.designer.active = !this.$appState.designer.active;
        }
    }
};
</script>
