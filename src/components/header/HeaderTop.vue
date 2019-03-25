<template>
    <header>
        <div class="header-top">
            <div class="header-top-logo">
                <router-link to="/">
                    <img src="@/assets/skg-logo.png" alt="Brand Logo" />
                </router-link>
            </div>
            <div class="header-top-navlink">
                <div class="navlink-item">
                    <router-link to="/lists">Rent</router-link>
                </div>
                <div class="navlink-item">
                    <router-link to="/request">
                        <span class="navlink-item-special">List Your House</span>
                    </router-link>
                </div>
                <div class="navlink-item">Careers</div>
                <div class="navlink-item">Blog</div>
            </div>
            <div class="header-top-search">
                <a-input-search
                    placeholder="What do you want ?"
                    class="top-search"
                    @search="onSearch"
                />
            </div>
            <div class="header-top-language">
                <language />
            </div>
            <div class="header-top-account">
                <a-avatar class="top-account" icon="user" />
            </div>
        </div>
        <div class="header-responsive-wrapper">
            <div class="header-responsive">
                <span @click="showDrawer"><i class="fal fa-bars"></i></span>
                <div class="header-top-logo">
                    <router-link to="/">
                        <img src="@/assets/skg-logo.png" alt="Brand Logo" />
                    </router-link>
                </div>
                <span @click="toggleFilter"><i class="fal fa-search"></i></span>
            </div>
            <div class="header-responsive-filter" v-if="isFiltered">
                <a-row>
                    <a-col :xs="24">
                        <a-input placeholder="What do you want ?">
                            <a-icon slot="addonAfter" type="environment"/>
                        </a-input>
                    </a-col>
                    <a-col :xs="24">
                        <selected />
                    </a-col>
                    <a-col :xs="24">
                        <selected />
                    </a-col>
                    <a-col :xs="24">
                        <selected />
                    </a-col>
                    <a-col :xs="24">
                        <selected />
                    </a-col>
                    <a-col :xs="24">
                        <selected />
                    </a-col>
                    <a-col><a-button class="header-responsive-search" size="large">SEARCH</a-button></a-col>
                </a-row>
            </div>
            <div>
                <drawer ref="drawer" :navLinks="navLinks" />
            </div>
        </div>
    </header>
</template>

<script>
import Drawer from '@/components/header/Drawer';
import Language from '@/components/header/Language';
import Selected from '@/components/selected/Selected';


export default {
    components: { Drawer, Selected, Language },
    data() {
        return {
            isFiltered: false,
            navLinks: [
                {link: '/lists', title: 'Rent'},
                {link: '/request', title: 'List Your House'},
            ]
        }
    },
    methods: {
        onSearch (value) {},
        handleChange(value) {},
        showDrawer() {
            this.$refs.drawer.open();
        },
        toggleFilter() {
            this.isFiltered = !this.isFiltered;
        }
    }
}
</script>
<style src="./HeaderTop.css" scoped></style>


