<template>
    <div class="amenities">
        <h1>AMENITIES</h1>
        <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in infos" :key="item.id">
                <info-icon v-bind="item" />
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { InfoIcon } from '@/components/info-icon';
export default {
    components: { InfoIcon },
    data() {
        return {
            infos: [
                {id: 1, icon: 'fal fa-tv', preData: '', mainData: 'TV', subData: ''},
                {id: 2, icon: 'fal fa-microchip', preData: '', mainData: 'Microwave', subData: ''},
                {id: 3, icon: 'fal fa-wind-warning', preData: '', mainData: 'Air conditioner', subData: ''},
                {id: 4, icon: 'fal fa-fire-smoke', preData: '', mainData: 'Smoke detector', subData: ''},
                {id: 5, icon: 'far fa-fire-extinguisher', preData: '', mainData: 'Fire extinguisher', subData: ''},
                {id: 6, icon: 'fal fa-industry-alt', preData: '', mainData: 'Balcony', subData: ''},
                {id: 7, icon: 'fal fa-bath', preData: '', mainData: 'Bathtub', subData: ''},
                {id: 8, icon: 'fal fa-trash-restore-alt', preData: '', mainData: 'Geyser', subData: ''},
                {id: 9, icon: 'fal fa-digital-tachograph', preData: '', mainData: 'Dish washer', subData: ''},
                {id: 10, icon: 'fas fa-plug', preData: '', mainData: 'Electric Chimney', subData: ''},
                {id: 11, icon: 'fal fa-parking-circle', preData: '', mainData: 'Parking', subData: ''},
                {id: 12, icon: 'fal fa-person-booth', preData: '', mainData: 'Room Heater', subData: ''},
                {id: 13, icon: 'fal fa-medkit', preData: '', mainData: 'First Aid Kit', subData: ''},
                {id: 14, icon: 'fal fa-universal-access', preData: '', mainData: 'Essentials', subData: ''},
                {id: 15, icon: 'fal fa-dog', preData: '', mainData: 'Pet Allowed', subData: ''},
                {id: 16, icon: 'fal fa-swimmer', preData: '', mainData: 'Pool', subData: ''},
                {id: 17, icon: 'fal fa-knife-kitchen', preData: '', mainData: 'Kitchen', subData: ''},
                {id: 18, icon: 'fab fa-elementor', preData: '', mainData: 'Elevator', subData: ''},
                {id: 19, icon: 'fas fa-dumpster', preData: '', mainData: 'Washing Machine', subData: ''},
                {id: 20, icon: 'fal fa-wifi', preData: '', mainData: 'Wi-Fi', subData: ''},
                {id: 21, icon: 'fal fa-network-wired', preData: '', mainData: 'Internet', subData: ''},
            ]
        }
    }
}
</script>
<style src="./Amenities.scss" lang="scss" scoped></style>



