<template>
    <div class="switch-item">
        <a-switch v-model="checked" >
            <a-icon type="check" slot="checkedChildren"/>
            <a-icon type="close" slot="unCheckedChildren"/>
        </a-switch>
        <span>{{ title }}</span>
    </div>
</template>
<script>
export default {
    props: {
        title: { type: String, default: '' }
    },
    data() {
        return {
            checked: false
        }
    }
}
</script>
<style lang="scss" scoped>
.switch-item {
    margin: 10px 0;
}
.switch-item span {
    padding-left: 15px;
}
</style>


