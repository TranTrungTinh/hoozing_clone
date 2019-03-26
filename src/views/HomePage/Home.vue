<template src="./Home.html"></template>
<style src="./Home.scss" lang="scss" scoped></style>

<script>
import { Widget } from '@/components/widget';
import Welcome from '@/components/welcome/Welcome';
import { Thumbnail } from '@/components/thumbnail';
import { Selected } from '@/components/selected';
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: { Thumbnail, Welcome, Widget, Selected, Carousel, Slide },
    data() {
        return {
            listItem: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},
                {id: 6},
                {id: 7},
                {id: 8},
            ],
            selected: 1,
            classArray: ['feature-tags-item']
        }
    },
    mounted() {
        setTimeout(() => {
            this.$refs.loading.done()
        }, 1000)
    }
}
</script>

