<template>
    <div class="thumbnail">
        <a-row :gutter="16">
            <a-col :span="12">
                <div class="thumbnail-img">
                    <a-carousel arrows>
                        <div slot="prevArrow" class="custom-slick-arrow" style="left: 30px; z-index: 1">
                            <a-icon type="left-circle" />
                        </div>
                        <div slot="nextArrow" class="custom-slick-arrow" style="right: 30px">
                            <a-icon type="right-circle" />
                        </div>
                        <div class="thumbnail-img-cover"><img src="https://images.unsplash.com/photo-1552853519-1793ff886074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80" alt=""></div>
                        <div class="thumbnail-img-cover"><img src="https://images.unsplash.com/photo-1552873904-593d8949b27f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt=""></div>
                        <div class="thumbnail-img-cover"><img src="https://images.unsplash.com/photo-1553052037-eb1fa8d3b1ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" alt=""></div>
                    </a-carousel>
                    <div class="thumbnail-tag-price">
                        <span class="tag-symbol">$</span>
                        <span class="tag-price">850</span>
                    </div>
                    <div v-if="isShowHeart" class="thumbnail-tag-heart" @click="toggleLove">
                        <i :class="showIconLove"></i>
                    </div>
                </div>
            </a-col>
            <a-col class="thumbnail-content" :span="12">
                <p class="thumbnail-code">HOUSE CODE 567</p>
                <p class="thumbnail-title">Artistic Elegant 2 Bedroom Apartment In District 2</p>
                <div class="thumbnail-description">
                    <a-row type="flex" justify="space-between">
                        <a-col>
                            <a-row type="flex" justify="space-between">
                                <a-col style="margin-right: 10px"><i class="fas fa-bed"></i></a-col>
                                <a-col>2 bed</a-col>
                            </a-row>
                        </a-col>
                        <a-col>
                            <a-row type="flex" justify="space-between">
                                <a-col style="margin-right: 10px"><i class="fas fa-bath"></i></a-col>
                                <a-col>3 bath</a-col>
                            </a-row>
                        </a-col>
                        <a-col>
                            <a-row type="flex" justify="space-between">
                                <a-col style="margin-right: 10px"><i class="fas fa-map-marker-alt"></i></a-col>
                                <a-col>Distric 2</a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'ThumbnailList',
    data() {
        return {
            isShowHeart: true,
            isLove: false
        }
    },
    methods: {
        toggleLove() {
            this.isLove = !this.isLove;
        }
    },
    computed: {
        showIconLove() {
            if(this.isLove) return 'fas fa-heart';
            return 'far fa-heart';
        }
    }
}
</script>
<style src="./ThumbnailList.scss" lang="scss" scoped></style>



