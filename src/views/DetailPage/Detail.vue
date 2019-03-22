<template>
    <section class="detail-content-page">
        <div class="detail-bg-cover" :style="[styles]">
            <a-button type="danger" size="large">VIEW PHOTO</a-button>
        </div>
        <div class="container">
            <div class="detail-main-content">
                <a-row :gutter="16">
                    <a-col :span="18">
                        <breadcrumb />
                        <div class="detail-tabs-content">
                            <a-tabs defaultActiveKey="1">
                                <a-tab-pane tab="Overview" key="1"><overview /></a-tab-pane>
                                <a-tab-pane tab="Summary" key="2"><summary-tab /></a-tab-pane>
                                <a-tab-pane tab="Amenities" key="3"><amenities /></a-tab-pane>
                                <a-tab-pane tab="Facillities" key="4"><overview /></a-tab-pane>
                            </a-tabs>
                        </div>
                    </a-col>
                    <a-col :span="6"></a-col>
                </a-row>
                
            </div>
        </div>
    </section>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

import Overview from '@/components/utils/overview/Overview';
import SummaryTab from '@/components/utils/summary/Summary';
import Amenities from '@/components/utils/amenities/Amenities';

export default {
    components: { Breadcrumb, Overview, SummaryTab, Amenities },
    data() {
        return {
            styles: {
                backgroundImage: `url("${require('@/assets/detail-bg.jpeg')}")`, 
            }
        }
    }
}
</script>
<style src="./Detail.css" scoped></style>


