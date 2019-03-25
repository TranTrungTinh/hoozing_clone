<template>
    <div class="overview">
        <div class="overview-title">VINHOMES GOLDEN RIVER APARTMENT 2 BEDROOMS - FULLY FURNISHED & ALLURING APARTMENT WITH ICONIC STYLE</div>
        <div class="overview-code">
            <span>H109276</span>
            <span class="overview-code-tag">HOUSE CODE</span>
        </div>
        <p><i class="fas fa-map-marker-alt"></i> District 1, Ho Chi Minh</p>

        <div class="overview-content">
            <h1>Overview</h1>
            <a-row :gutter="16">
                <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in infos" :key="item.id">
                    <info-icon v-bind="item" />
                </a-col>
            </a-row>
        </div>
        <div class="overview-description">
            <h1>Description</h1>
            <p>This is very clean, comfortable, and perfectly sized for one to two people. The place is absolutely reasonable setting. Overview: Full of light and air, Comfort Space Address: Nguyen Huu Canh Street, Binh Thanh District Project Facility: parking lot, Central Plaza, children's playground, convenient stores, history square, sculpture square, international garden, outdoor gym and fitness area, multi-purpose courtyard, golf putting green Nearby places: Zoo, Botanic Garden, Universities, historicMore</p>
        </div>
    </div>
</template>
<script>
import infoIcon from '@/components/info-icon/Info-icon';
export default {
    components: { infoIcon },
    data() {
        return {
            infos: [
                {id: 1, icon: 'far fa-building', preData: '', mainData: 'Apartment', subData: ''},
                {id: 2, icon: 'fas fa-chart-area', preData: '42.00', mainData: 'm2', subData: ''},
                {id: 3, icon: 'fas fa-bath', preData: '2', mainData: 'Bathroom(s)', subData: ''},
                {id: 4, icon: 'fas fa-bed', preData: '2', mainData: 'Bedroom(s)', subData: ''},
                {id: 5, icon: 'fas fa-users', preData: '', mainData: 'Accommodate(s):', subData: '4'},
                {id: 6, icon: 'fas fa-umbrella', preData: '', mainData: 'Furniture:', subData: 'Full'},
            ]
        }
    }
}
</script>
<style src="./Overview.scss" lang="scss" scoped></style>


