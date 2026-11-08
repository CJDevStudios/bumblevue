<script>
    import { getPTOptions } from '@/components/doc/helpers';

    export default {
        data() {
            return {
                value: null,
                docs: [
                    {
                        data: getPTOptions('RadioButton'),
                        key: 'RadioButton'
                    }
                ]
            };
        }
    };
</script>

<template>
    <DocPTViewer :docs="docs">
        <RadioButton v-model="value" value="1" />
    </DocPTViewer>
</template>
