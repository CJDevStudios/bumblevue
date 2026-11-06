<template>
    <DocSectionText v-bind="$attrs">
        <p>Each built-in icon is a Vue component that can be imported individually from <i>@cjdevstudios/bumblevue/icons</i>.</p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <CheckIcon />
        <TimesIcon />
        <SearchIcon />
        <StarIcon />
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

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
import CheckIcon from '@cjdevstudios/bumblevue/icons/check';

<CheckIcon />
`
            }
        };
    }
};
</script>
