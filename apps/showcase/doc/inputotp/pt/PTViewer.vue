<script>
    import { getPTOptions } from '@/components/doc/helpers';

    export default {
        data() {
            return {
                value: null,
                docs: [
                    {
                        data: getPTOptions('InputOtp'),
                        key: 'InputOtp'
                    }
                ]
            };
        }
    };
</script>

<template>
    <DocPTViewer :docs="docs">
        <InputOtp v-model="value" />
    </DocPTViewer>
</template>
