<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Avatar from '@cjdevstudios/bumblevue/avatar';
import AvatarGroup from '@cjdevstudios/bumblevue/avatargroup';   //Optional for grouping
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>
