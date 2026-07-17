<template>
    <section class="landing-footer pt-20 px-8 lg:px-20">
        <div class="landing-footer-container">
            <div class="flex flex-wrap z-10">
                <div class="w-6/12 lg:w-3/12 flex">
                    <ul class="list-none p-0 m-0">
                        <li class="font-bold mb-8">General</li>
                        <li class="mb-6">
                            <BumbleVueNuxtLink to="/setup" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Get Started</BumbleVueNuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-6/12 lg:w-3/12 flex">
                    <ul class="list-none p-0 m-0">
                        <li class="font-bold mb-8">Support</li>
                        <li class="mb-6">
                            <a href="https://github.com/CJDevStudios/bumblevue/discussions" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300" target="_blank" rel="noopener noreferrer"
                                >Forum</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="w-6/12 lg:w-3/12 flex">
                    <ul class="list-none p-0 m-0">
                        <li class="font-bold mt-8 lg:mt-0 mb-8">Theming</li>
                        <li class="mb-6">
                            <BumbleVueNuxtLink to="/theming/styled" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Styled Mode</BumbleVueNuxtLink>
                        </li>
                        <li class="mb-6">
                            <BumbleVueNuxtLink to="/theming/unstyled" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Unstyled Mode</BumbleVueNuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-6/12 lg:w-3/12 flex">
                    <ul class="list-none p-0 m-0">
                        <li class="font-bold mt-8 lg:mt-0 mb-8">Resources</li>
                        <li class="mb-6">
                            <a href="https://github.com/CJDevStudios/bumblevue" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300" target="_blank" rel="noopener noreferrer"
                                >Source Code</a
                            >
                        </li>
                        <li class="mb-6">
                            <a href="mailto:contact@cjdevstudios.com" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr class="section-divider" />

            <div class="flex flex-wrap justify-between py-12 gap-8">
                <div>
                    <div class="flex">
                        <img src="/logo-icon.webp" width="32" class="block dark:hidden" aria-hidden="true" />
                        <img src="/logo-icon-dark.webp" width="32" class="hidden dark:block" aria-hidden="true" />
                        <span class="content-center text-xl font-bold text-yellow-700 dark:text-yellow-500">BumbleVue</span>
                    </div>
                    <a href="https://cjdevstudios.com" target="_blank" rel="noopener noreferrer">CJ Development Studios</a>
                    and the BumbleVue Community.
                </div>
                <div class="flex items-center gap-2">
                    <a href="https://github.com/CJDevStudios/bumblevue" class="linkbox linkbox-icon">
                        <i class="pi pi-github"></i>
                    </a>
                    <a href="https://github.com/CJDevStudios/bumblevue/discussions" class="linkbox linkbox-icon">
                        <i class="pi pi-comments"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>
