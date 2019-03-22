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
import infoIcon from '@/components/info-icon/Info-icon';
export default {
    components: { infoIcon },
    data() {
        return {
            infos: [
                {id: 1, icon: 'fas fa-tv', preData: '', mainData: 'Apartment', subData: ''},
                {id: 2, icon: 'fas fa-warehouse', preData: '3', mainData: 'm2', subData: ''},
                {id: 3, icon: 'far fa-fire-extinguisher', preData: '2', mainData: 'Bathroom(s)', subData: ''},
                {id: 4, icon: 'far fa-parking', preData: '2', mainData: 'Bedroom(s)', subData: ''},
                {id: 5, icon: 'fas fa-users', preData: '', mainData: 'Accommodate(s):', subData: '4'},
                {id: 6, icon: 'fas fa-umbrella', preData: '', mainData: 'Furniture:', subData: 'Full'},
            ]
        }
    }
}
</script>


