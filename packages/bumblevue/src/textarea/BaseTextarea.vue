<script>
import BaseInput from '@cjdevstudios/bumblevue-core/baseinput';
import TextareaStyle from '@cjdevstudios/bumblevue/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseInput,
    props: {
        autoResize: Boolean
    },
    style: TextareaStyle,
    provide() {
        return {
            $pcTextarea: this,
            $parentInstance: this
        };
    }
};
</script>
