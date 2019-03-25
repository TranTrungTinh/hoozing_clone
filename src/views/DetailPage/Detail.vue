<template src="./Detail.html"></template>
<style src="./Detail.scss" lang="scss" scoped></style>

<script>
import Widget from '@/components/widget/Widget';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

import Overview from '@/components/utils/overview/Overview';
import SummaryTab from '@/components/utils/summary/Summary';
import Amenities from '@/components/utils/amenities/Amenities';
import Facilities from '@/components/utils/facilities/Facilities';

export default {
    components: { Widget, Breadcrumb, Overview, SummaryTab, Amenities, Facilities },
    data() {
        return {
            styles: {
                backgroundImage: `url("${require('@/assets/detail-bg.jpeg')}")`, 
            },
            rules: {
                name: [{ required: true, message: 'Please input your name !' }],
                phone: [{ required: true, message: 'Please input phone number !' }],
                email: [{ required: true, message: 'Please input your email !' }],
                messages: [{ required: true, message: 'Please input another messages !' }],
            }
        }
    },
    beforeCreate () {
        this.form = this.$form.createForm(this);
    },
    mounted() {
        setTimeout(() => {
            this.$refs.loading.done()
        }, 1000)
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
}
</script>


