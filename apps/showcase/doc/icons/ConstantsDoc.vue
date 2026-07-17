<template>
    <DocSectionText v-bind="$attrs">
        <p>Constants API is available to reference icons easily when used programmatically.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
import { BumbleIcons } from '@cjdevstudios/bumblevue-core/api';

export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    items: [
                        { label: 'New', icon: BumbleIcons.PLUS },
                        { label: 'Open', icon: BumbleIcons.DOWNLOAD }
                    ]
                }
            ],
            code: {
                basic: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script>
import { BumbleIcons } from '@cjdevstudios/bumblevue-core/api';

export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    items: [
                        { label: 'New', icon: BumbleIcons.PLUS },
                        { label: 'Open', icon: BumbleIcons.DOWNLOAD }
                    ]
                }
            ]
        };
    }
};
<\/script>
`
            }
        };
    }
};
</script>
