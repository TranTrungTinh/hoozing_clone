<template>
    <a-select defaultValue="any" style="width: 100%">
        <a-select-option value="any">Any</a-select-option>
        <a-select-option class="selected-item" v-for="(item, i) in selects" :key="i" :value="item.key" >
            <i v-if="options && options.icon" :class="options.icon"></i>
            <span v-if="options && options.text">{{ options.text }}</span>
            <span>{{ item.value }}</span>
        </a-select-option>
    </a-select>
</template>
<script>
export default {
    name: 'Selected',
    props: {
        selects: { type: Array, default: () => [] },
        options: { 
            type: Object, default: () => {} 
            // options maybe text or icon render
            // icon is class fontawesome: ex -> fas fa-bed
        }
    }
}
</script>
<style src="./Selected.css" scoped></style>



