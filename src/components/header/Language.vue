<template>
    <a-select defaultValue="en" class="top-selected">
        <a-select-option value="vn" class="top-selected-item">
            <img src="https://img.icons8.com/color/24/000000/vietnam.png"/>
            <span style="padding-left: 10px">Vietnamese</span>
        </a-select-option>
        <a-select-option value="en" class="top-selected-item">
            <img src="https://img.icons8.com/color/24/000000/great-britain.png"/>
            <span style="padding-left: 10px">English</span>
        </a-select-option>
    </a-select>
</template>
<script>
export default {
    name: 'Language'
}
</script>
<style lang="scss" scoped>
.top-selected {
   width: 160px;
}

.top-selected-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>


