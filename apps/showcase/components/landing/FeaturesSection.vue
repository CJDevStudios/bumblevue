<template>
    <section class="landing-features py-20">
        <div class="section-header">Features</div>
        <p class="section-detail">BumbleVue is the most complete free and open-source solution for your UI requirements.</p>
        <div class="mt-16 px-8 lg:px-20">
            <div class="features-container">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center">
                        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="box p-6 w-full animate-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-components.svg" alt="components icon" class="block mb-4" />
                            <div class="font-semibold mb-4 text-lg">80+ UI Components</div>
                            <p class="m-0 text-surface-500 dark:text-surface-400 font-medium">The ultimate set of UI Components to assist you with 80+ impressive Vue Components.</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center">
                        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="box p-6 w-full animate-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-theme.svg" alt="components icon" class="block mb-4" />
                            <div class="font-semibold mb-4 text-lg">Styled or Unstyled</div>
                            <p class="m-0 text-surface-500 dark:text-surface-400 font-medium">Choose from a variety of pre-built themes or implement your design systems with the CSS library of your choice like TailwindCSS.</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center">
                        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="box p-6 w-full animate-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-accessibility.svg" alt="components icon" class="block mb-4" />
                            <div class="font-semibold mb-4 text-lg">Accessibility</div>
                            <p class="m-0 text-surface-500 dark:text-surface-400 font-medium">Compliant with the Web Content Accessibility Guidelines (WCAG 2.0).</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center">
                        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="box p-6 w-full animate-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-mobile.svg" alt="components icon" class="block mb-4" />
                            <div class="font-semibold mb-4 text-lg">Mobile</div>
                            <p class="m-0 text-surface-500 dark:text-surface-400 font-medium">First class support for responsive design led by touch optimized elements.</p>
                        </div>
                    </div>
                    <div class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center">
                        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="box p-6 w-full animate-duration-500">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/features/icon-ts.svg" alt="components icon" class="block mb-4" />
                            <div class="font-semibold mb-4 text-lg">Typescript</div>
                            <p class="m-0 text-surface-500 dark:text-surface-400 font-medium">Top-notch support for Typescript with types and tooling assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
