<template>
    <div :ref="containerRef" class="layout-topbar">
        <div class="layout-topbar-inner">
            <div class="layout-topbar-logo-container">
                <BumbleVueNuxtLink to="/" class="layout-topbar-logo" aria-label="BumbleVue logo">
                    <img src="/logo-icon.webp" width="64" class="block dark:hidden" aria-hidden="true" />
                    <img src="/logo-icon-dark.webp" width="64" class="hidden dark:block" aria-hidden="true" />
                    <span class="content-center text-3xl font-bold text-yellow-700 dark:text-yellow-500">BumbleVue</span>
                </BumbleVueNuxtLink>
                <BumbleVueNuxtLink to="/" class="layout-topbar-icon" aria-label="BumbleVue logo">
                    <img src="/logo-icon.webp" width="64" class="block dark:hidden" aria-hidden="true" />
                    <img src="/logo-icon-dark.webp" width="64" class="hidden dark:block" aria-hidden="true" />
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
                <li v-if="false">
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
                                    <span>BumbleVue {{ version.name }}</span>
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
