<script>
    import RefreshIcon from '@cjdevstudios/bumblevue/icons/refresh';
    import SpinnerIcon from '@cjdevstudios/bumblevue/icons/spinner';

    export default {
        components: { RefreshIcon, SpinnerIcon },
        data() {
            return {
                code: {
                    basic: `
<SpinnerIcon spin style="width: 2rem; height: 2rem" />
<RefreshIcon spin style="width: 2rem; height: 2rem" />
<i class="fa-solid fa-gear p-icon-spin"></i>
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>spin</i> property applies infinite rotation to an icon. Any other element, such as an icon from a custom icon library, can be rotated with the <i>p-icon-spin</i> class.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <SpinnerIcon spin style="width: 2rem; height: 2rem" />
        <RefreshIcon spin style="width: 2rem; height: 2rem" />
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>
