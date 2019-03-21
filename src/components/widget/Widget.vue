<template>
    <a-spin :spinning="loading" :indicator="indicator">
        <slot></slot>
    </a-spin>
</template>
<script>
export default {
    name: 'Widget',
    data() {
        return {
            loading: true,
            indicator: <a-icon type="loading" style="font-size: 28px" spin />,
        }
    },
    methods: {
        done() {
            this.$Progress.finish();
            this.loading = false;
        }
    },
    mounted() {
        this.$Progress.start();
    }
}
</script>

