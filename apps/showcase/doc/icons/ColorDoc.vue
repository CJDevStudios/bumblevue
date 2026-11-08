<script>
    import CheckIcon from '@cjdevstudios/bumblevue/icons/check';
    import SearchIcon from '@cjdevstudios/bumblevue/icons/search';
    import StarIcon from '@cjdevstudios/bumblevue/icons/star';
    import TimesIcon from '@cjdevstudios/bumblevue/icons/times';

    export default {
        components: { CheckIcon, SearchIcon, StarIcon, TimesIcon },
        data() {
            return {
                code: {
                    basic: `
<CheckIcon style="color: slateblue" />
<TimesIcon style="color: green" />
<SearchIcon style="color: var(--p-primary-color)" />
<StarIcon style="color: #708090" />
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Icons are filled with <i>currentColor</i> so the color is defined with the <i>color</i> property which is inherited from parent by default.</p>
    </DocSectionText>
    <div class="card flex justify-center items-center gap-4">
        <CheckIcon style="color: slateblue" />
        <TimesIcon style="color: green" />
        <SearchIcon style="color: var(--p-primary-color)" />
        <StarIcon style="color: #708090" />
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>
