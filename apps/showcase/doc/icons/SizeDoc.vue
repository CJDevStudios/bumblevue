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
<CheckIcon style="width: 1rem; height: 1rem" />
<TimesIcon style="width: 1.5rem; height: 1.5rem" />
<SearchIcon style="width: 2rem; height: 2rem" />
<StarIcon style="width: 2.5rem; height: 2.5rem" />
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Icons are sized by the <i>icon.size</i> design token by default, and the size of an individual icon is controlled with the <i>width</i> and <i>height</i> properties of the element.</p>
    </DocSectionText>
    <div class="card flex justify-center items-center gap-4">
        <CheckIcon style="width: 1rem; height: 1rem" />
        <TimesIcon style="width: 1.5rem; height: 1.5rem" />
        <SearchIcon style="width: 2rem; height: 2rem" />
        <StarIcon style="width: 2.5rem; height: 2.5rem" />
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>
