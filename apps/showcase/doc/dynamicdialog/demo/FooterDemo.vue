<script>
    export default {
        inject: ['dialogRef'],
        methods: {
            closeDialog(e) {
                this.dialogRef.close(e);
            }
        }
    };
</script>

<template>
    <Button type="button" label="Cancel" icon="pi pi-times" @click="closeDialog({ buttonType: 'Cancel' })" autofocus></Button>
</template>
