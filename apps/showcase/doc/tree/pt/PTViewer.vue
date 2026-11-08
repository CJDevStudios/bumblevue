<script>
    import { getPTOptions } from '@/components/doc/helpers';
    import { NodeService } from '@/service/NodeService';

    export default {
        data() {
            return {
                nodes: null,
                selectedKey: null,
                docs: [
                    {
                        data: getPTOptions('Tree'),
                        key: 'Tree'
                    }
                ]
            };
        },
        mounted() {
            NodeService.getTreeNodes().then((data) => (this.nodes = data));
        }
    };
</script>

<template>
    <DocPTViewer :docs="docs">
        <Tree v-model:selectionKeys="selectedKey" filter :value="nodes" selectionMode="checkbox" class="w-full md:w-120"></Tree>
    </DocPTViewer>
</template>
