<template>
    <div role="alert" aria-live="assertive" aria-atomic="true" :class="cx('root')" v-bind="ptmi('root')">
        <slot name="icon">
            <component :is="icon ? 'span' : iconComponent" :class="cx('icon')" v-bind="ptm('icon')"></component>
        </slot>
        <div v-if="$slots.default" :class="cx('text')" v-bind="ptm('text')">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import CheckIcon from '@cjdevstudios/bumblevue-icons/check';
import ExclamationTriangleIcon from '@cjdevstudios/bumblevue-icons/exclamationtriangle';
import InfoCircleIcon from '@cjdevstudios/bumblevue-icons/infocircle';
import TimesCircleIcon from '@cjdevstudios/bumblevue-icons/timescircle';
import InlineMessageStyle from '@cjdevstudios/bumblevue/inlinemessage/style';

export default {
    name: 'InlineMessage',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    style: InlineMessageStyle,
    provide() {
        return {
            $pcInlineMessage: this,
            $parentInstance: this
        };
    },
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    mounted() {
        if (!this.sticky) {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        iconComponent() {
            return {
                info: InfoCircleIcon,
                success: CheckIcon,
                warn: ExclamationTriangleIcon,
                error: TimesCircleIcon
            }[this.severity];
        }
    }
};
</script>
