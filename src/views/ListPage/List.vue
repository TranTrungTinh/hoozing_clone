<template src="./List.html"></template>
<style src="./List.scss" lang="scss" scoped></style>

<script>
import { Widget } from '@/components/widget';
import { Filtered } from '@/components/filtered';
import { Selected } from '@/components/selected';
import { Breadcrumb } from '@/components/breadcrumb';
import GridList from '@/components/lists/Lists';


export default {
    props: { onDone: { type: Function } },
    components: { Filtered, Breadcrumb, Selected, GridList, Widget },
    data() {
        return {
            selected: 1,
            classArray: ['view-select-item']
        }
    },
    mounted() {
        setTimeout(() => {
            this.$refs.loading.done()
        }, 1000)
    }
}
</script>


