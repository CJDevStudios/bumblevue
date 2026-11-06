<template>
    <DocSectionText v-bind="$attrs">
        <p>
            <a href="https://github.com/primefaces/primeicons">PrimeIcons</a> is an icon font that uses the <i>pi pi-&#123;icon&#125;</i> syntax, which is also used throughout this documentation. Components with icon properties such as
            <i>icon</i> or <i>dropdownIcon</i> accept the class names of any icon font.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
// npm install primeicons
import 'primeicons/primeicons.css';

<Button icon="pi pi-check" />
<Select dropdownIcon="pi pi-chevron-down" />
`
            }
        };
    }
};
</script>
