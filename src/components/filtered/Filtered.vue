<template>
    <div class="filtered-box">
        <a-row>
            <a-col :span="18">
                <a-row type="flex" justify="space-around" >
                    <a-col :span="4"><selected /></a-col>
                    <a-col :span="3"><selected /></a-col>
                    <a-col :span="3"><selected /></a-col>
                    <a-col :span="3"><selected /></a-col>
                    <a-col :span="3"><selected /></a-col>
                    <a-col :span="3"><selected /></a-col>
                </a-row>
            </a-col>
            <a-col :span="6">
                <a-button class="filtered-button" icon="filter" @click="toggleOption">More Filter</a-button>
            </a-col>
        </a-row>
        <div class="container mt-50" v-if="showOption">
            <h1>Basic Features</h1>
            <a-row type="flex" justify="space-between">
                <a-col :span="11"><selected /></a-col>
                <a-col :span="11"><selected /></a-col>
            </a-row>
            <h1 class="mt-30">Required Amenities</h1>
            <a-row :gutter="16">
                <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in options" :key="item.id">
                    <switched :title="item.title" />
                </a-col>
            </a-row>
            <a-row class="mt-30">
                <a-col :span="2">
                    <a-button type="primary" icon="check" size="large">Apply</a-button>
                </a-col>
                <a-col :span="2" :offset="1">
                    <a-button icon="close" size="large">Clear filter</a-button>
                </a-col>
            </a-row>
        </div>
    </div>
</template>
<script>
import Selected from '@/components/selected/Selected';
import Switched from '@/components/switch/Switch';

export default {
    name: 'Filtered',
    components : { Selected, Switched },
    data() {
        return {
            options: [
                {id: 1, title: 'TV'},
                {id: 2, title: 'Microwave'},
                {id: 3, title: 'Air conditioner'},
                {id: 4, title: 'Smoke detector'},
                {id: 5, title: 'Fire extinguisher'},
                {id: 6, title: 'Balcony'},
                {id: 7, title: 'Bathtub'},
                {id: 8, title: 'Geyser'},
                {id: 9, title: 'Dish washer'},
                {id: 10, title: 'Electric Chimney'},
                {id: 11, title: 'Parking'},
                {id: 12, title: 'Room Heater'},
                {id: 13, title: 'First Aid Kit'},
                {id: 14, title: 'Essentials'},
                {id: 15, title: 'Pet Allowed'},
            ],
            showOption: false
        }
    },
    methods: {
        toggleOption() {
            this.showOption = !this.showOption;
        }
    }
}
</script>
<style src="./Filtered.scss" lang="scss" scoped></style>


