<template>
    <div class="facilities">
        <h1>FACILITIES</h1>
        <a-row :gutter="16">
            <a-col :xs="24" :sm="12" :md="8" :lg="8" v-for="item in infos" :key="item.id">
                <info-icon v-bind="item" />
            </a-col>
        </a-row>
    </div>
</template>
<script>
import infoIcon from '@/components/info-icon/Info-icon';
export default {
    components: { infoIcon },
    data() {
        return {
            infos: [
                {id: 1, icon: 'fas fa-charging-station', preData: '', mainData: '24Hr Electricity Backup', subData: ''},
                {id: 2, icon: 'fas fa-parking', preData: '', mainData: 'Parking', subData: ''},
                {id: 3, icon: 'far fa-user-hard-hat', preData: '', mainData: ' Maintenance Staff', subData: ''},
                {id: 4, icon: 'far fa-home-lg-alt', preData: '', mainData: 'Club House', subData: ''},
                {id: 5, icon: 'fas fa-university', preData: '', mainData: 'Community Hall', subData: ''},
                {id: 6, icon: 'fas fa-utensils-alt', preData: '', mainData: 'Restaurant', subData: ''},
                {id: 7, icon: 'fal fa-money-check', preData: '', mainData: 'Banking / ATM', subData: ''},
                {id: 8, icon: 'fas fa-mug-hot', preData: '', mainData: 'Coffee Shop', subData: ''},
                {id: 9, icon: 'fas fa-prescription-bottle-alt', preData: '', mainData: 'Pharmacy', subData: ''},
                {id: 10, icon: 'fal fa-shopping-bag', preData: '', mainData: 'Shopping Mall', subData: ''},
                {id: 11, icon: 'fal fa-cart-arrow-down', preData: '', mainData: 'Super Market', subData: ''},
                {id: 12, icon: 'fas fa-swimmer', preData: '', mainData: 'Swimming Pool', subData: ''},
                {id: 13, icon: 'fal fa-racquet', preData: '', mainData: 'Tennis Court', subData: ''},
                {id: 14, icon: 'fal fa-shuttlecock', preData: '', mainData: 'Badminton Court', subData: ''},
                {id: 15, icon: 'fal fa-dumbbell', preData: '', mainData: 'Gymnasium', subData: ''},
            ]
        }
    }
}
</script>
<style src="./Facilities.scss" lang="scss" scoped></style>



