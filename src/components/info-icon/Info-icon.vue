<template>
    <div class="info-icon">
        <i :class="icon"></i>
        <span class="pre-data">{{ preData }}</span>
        <span class="main-data">{{ mainData }}</span>
        <span class="sub-data">{{ subData }}</span>
    </div>
</template>
<script>
export default {
    props: {
        icon: { type: String, default: 'fab fa-fonticons' },
        preData: { type: String, default: '' },
        mainData: { type: String, default: '' },
        subData: { type: String, default: '' }
    }
}
</script>
<style scoped>
.info-icon {
    display: flex;
    align-items: center;
    padding: 5px 0;
}
.info-icon i {
    font-size: 16px;
}
.pre-data,
.sub-data {
    padding: 0 5px;
}
</style>


