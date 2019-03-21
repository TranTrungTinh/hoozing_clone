<template>
    <widget ref="loading">
        <section class="request-content-page" :style="[styles]">
            <div class="container">
                <a-row class="request-main-content" :gutter="16"> 
                    <a-col class="request-main-content-left" :xs="24" :sm="12">
                        <div class="why-choose-me">
                            <h4>WHY CHOOSE SKG</h4>
                            <p>70% of our customers are expats</p>
                            <p>A-Z solution for landlord</p>
                            <p>Provide all inclusive rental services</p>
                        </div>
                        <div class="hotline-content">
                            <p>HOTLINE: <span>(84) 123456 789</span></p>
                        </div>
                        <div class="process-content">
                            <h4>SKG LEASING PROCESS</h4>
                            <ol>
                                <li>Send leasing request</li>
                                <li>SKG calls to verify demand & information</li>
                                <li>SKG uploads your properties on www.sk-global.biz</li>
                                <li>SKG helps customers to visit apartments and sign contracts</li>
                            </ol>
                        </div>
                    </a-col>
                    <a-col class="request-main-content-right" :xs="24" :sm="12">
                        <div class="request-content-form">
                            <h1>LEASING REQUEST</h1>
                            <a-form :form="form" @submit="handleSubmit">
                                <a-form-item label="NAME">
                                    <a-input v-decorator="['name', { rules: rules.name}]" />
                                </a-form-item>
                                <a-form-item label="PHONE NUMBER">
                                    <a-input type="number" v-decorator="['phone', { rules: rules.phone}]">
                                        <a-select slot="addonBefore" defaultValue="vn" style="width: 90px">
                                            <a-select-option value="vn">+84</a-select-option>
                                            <a-select-option value="en">09</a-select-option>
                                        </a-select>
                                    </a-input>
                                </a-form-item>
                                <a-form-item label="EMAIL">
                                    <a-input v-decorator="['email']" />
                                </a-form-item>
                                <a-form-item label="ADDRESS / PROJECT NAME">
                                    <a-textarea v-decorator="['address']" :autosize="{ minRows: 3, maxRows: 6 }" />
                                </a-form-item>
                                <a-form-item label="NOTES">
                                    <a-textarea v-decorator="['notes']" :autosize="{ minRows: 3, maxRows: 6 }" />
                                </a-form-item>

                                <a-button class="request-content-button" html-type="submit">SEND REQUEST</a-button>
                            </a-form>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </section>
    </widget>
</template>
<script>
import Widget from '@/components/widget/Widget';

export default {
    name: 'RequestPage',
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
<style src="./Request.css" scoped></style>


