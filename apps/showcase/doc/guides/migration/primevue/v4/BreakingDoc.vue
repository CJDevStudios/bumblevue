<script setup lang="ts"></script>

<template>
    <DocSectionText v-bind="$attrs">
        <h4>Package Renames</h4>
        <p>The following packages have been renamed to reflect the new branding of BumbleVue:</p>
        <table class="doc-table">
            <thead>
                <tr>
                    <th>Old package</th>
                    <th>New package</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>primevue</td>
                    <td>@cjdevstudios/bumblevue</td>
                </tr>
                <tr>
                    <td>@primevue/auto-import-resolver</td>
                    <td>@cjdevstudios/bumblevue-auto-import-resolver</td>
                </tr>
                <tr>
                    <td>@primevue/core</td>
                    <td>@cjdevstudios/bumblevue-core</td>
                </tr>
                <tr>
                    <td>@primevue/forms</td>
                    <td>@cjdevstudios/bumblevue-forms</td>
                </tr>
                <tr>
                    <td>@primevue/icons</td>
                    <td>@cjdevstudios/bumblevue-icons</td>
                </tr>
                <tr>
                    <td>@primevue/metadata</td>
                    <td>@cjdevstudios/bumblevue-metadata</td>
                </tr>
                <tr>
                    <td>@primevue/nuxt-module</td>
                    <td>@cjdevstudios/bumblevue-nuxt-module</td>
                </tr>
                <tr>
                    <td>primeicons</td>
                    <td>@cjdevstudios/bumbleicons</td>
                </tr>
                <tr>
                    <td>tailwindcss-primeui</td>
                    <td>@cjdevstudios/tailwindcss-bumblevue</td>
                </tr>
                <tr>
                    <td>@primeuix/forms</td>
                    <td>@cjdevstudios/bumbleuix-forms</td>
                </tr>
                <tr>
                    <td>@primeuix/headless</td>
                    <td>@cjdevstudios/bumbleuix-headless</td>
                </tr>
                <tr>
                    <td>@primeuix/locale</td>
                    <td>@cjdevstudios/bumbleuix-locale</td>
                </tr>
                <tr>
                    <td>@primeuix/motion</td>
                    <td>@cjdevstudios/bumbleuix-motion</td>
                </tr>
                <tr>
                    <td>@primeuix/styled</td>
                    <td>@cjdevstudios/bumbleuix-styled</td>
                </tr>
                <tr>
                    <td>@primeuix/styles</td>
                    <td>@cjdevstudios/bumbleuix-styles</td>
                </tr>
                <tr>
                    <td>@primeuix/themes</td>
                    <td>@cjdevstudios/bumbleuix-themes</td>
                </tr>
                <tr>
                    <td>@primeuix/utils</td>
                    <td>@cjdevstudios/bumbleuix-utils</td>
                </tr>
            </tbody>
        </table>
        <h4>Export / Variable Renames</h4>
        <p>In addition to renamed packages, some exports and variables have been renamed to reflect the new branding of BumbleVue. This includes but is not limited to the following:</p>
        <ul class="list-disc ms-4">
            <li><code>usePrimeVue</code> renamed to <code>useBumbleVue</code></li>
            <li><code>$primevue</code> global property renamed to <code>$bumblevue</code></li>
            <li><code>PrimeVueConfiguration</code> renamed to <code>BumbleVueConfiguration</code></li>
        </ul>
        <p>In general the renames are fairly obvious replacements of PrimeVue with BumbleVue.</p>
        <p>Note that the prefix "p-" and style class "pi" for PrimeIcons remains the same for BumbleIcons.</p>
        <h4>Dropped packages/features/ecosystem products</h4>
        <p>In order to focus on the core BumbleVue project and maintain it as free and open source, some of the features and ecosystem products from PrimeTek have no alternative in BumbleVue.</p>
        <h5>LLM / MCP</h5>
        <p>
            AI has largely been destructive to the economy, environment, and workforce. It has played no small part in PrimeTek's decision to go closed-source and pursue more aggressive monetization. Finally, there are emerging studies, and
            self-testimonies showing a cognitive decline in people that rely on AI. It is recognized that using AI as a tool, rather than replacing skilled developers and real human cognition, has a place in the future of software development, but
            the use of "agentic" AI is not something that will be supported at this point in time. If you want to use AI like this, I fully support forks of the PrimeVue LLM/MCP packages for that purpose, but for now there will be no support for it
            in BumbleVue.
        </p>
        <h5>Volt UI</h5>
        <p>While an interesting project, there is no alternative currently in BumbleVue yet. Although a rebranded version of Volt UI has not been ruled out for the future, it is not a priority at this time.</p>
        <h5>PrimeFlex</h5>
        <p>This project was already deprecated and has not been migrated into the BumbleVue ecosystem as it has no place when better solutions like TailwindCSS exist.</p>
        <h5>PrimeBlocks / Templates</h5>
        <p>
            The are no plans currently for selling templates or "UI blocks". In 2025, Tailwind announced they had to downsize by 75% and placed the blame solely on AI. The fact is that monetizing something than can easily be replicated by AI, or even
            a skilled designer, is not a sustainable business model and this is not a desired route for monetization of BumbleVue or even a desired free offering.
        </p>
        <h5>PrimeCLT</h5>
        <p>Not essential.</p>
    </DocSectionText>
</template>

<style scoped></style>
