<template>
    <button v-ripple :class="cx('prev')" type="button" v-bind="getPTOptions('prev')" data-pc-group-section="pagebutton">
        <component :is="template || 'AngleLeftIcon'" :class="cx('prevIcon')" v-bind="getPTOptions('prevIcon')" />
    </button>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import AngleLeftIcon from '@cjdevstudios/bumblevue-icons/angleleft';
import Ripple from '@cjdevstudios/bumblevue/ripple';

export default {
    name: 'PrevPageLink',
    hostName: 'Paginator',
    extends: BaseComponent,
    props: {
        template: {
            type: Function,
            default: null
        }
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    disabled: this.$attrs.disabled
                }
            });
        }
    },
    components: {
        AngleLeftIcon: AngleLeftIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
