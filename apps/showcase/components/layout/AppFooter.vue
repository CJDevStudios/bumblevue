<template>
    <div class="layout-footer">
        <div>
            <span>BumbleVue by </span>
            <a href="https://cjdevstudios.com" target="_blank" rel="noopener noreferrer">CJ Development Studios</a>
            and the BumbleVue Community. Version {{ version }}
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';

export default {
    data() {
        return {
            version: pkg.version
        };
    }
};
</script>
