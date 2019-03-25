<template src="./Request.html"></template>
<style src="./Request.scss" lang="scss" scoped></style>

<script>
import Widget from '@/components/widget/Widget';

export default {
    components: { Widget },
    data() {
        return {
            styles: {
                backgroundImage: `url("${require('@/assets/request-bg.png')}")`,
            },
            rules: {
                name: [{ required: true, message: 'Please input your name !' }],
                phone: [{ required: true, message: 'Please input phone number !' }],
            }
        }
    },
    beforeCreate () {
        this.form = this.$form.createForm(this);
    },    
    methods: {
        handleSubmit (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        },
    },
    mounted() {
        setTimeout(() => {
            this.$refs.loading.done()
        }, 1000)
    }
}
</script>


