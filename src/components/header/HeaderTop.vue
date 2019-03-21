<template>
    <div class="header-top">
        <div class="header-top-logo">
            <router-link to="/">
                <img src="@/assets/skg-logo.png" alt="Brand Logo" />
            </router-link>
        </div>
        <div class="header-top-navlink">
            <div class="navlink-item">Rent</div>
            <div class="navlink-item">
                <router-link to="/lists">
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
            <a-select defaultValue="vn" class="top-selected" @change="handleChange">
                <a-select-option value="vn">
                    <img src="https://img.icons8.com/color/24/000000/vietnam.png"/>
                    <span style="padding-left: 10px">Vietnamese</span>
                </a-select-option>
                <a-select-option value="en" class="top-selected-item">
                    <img src="https://img.icons8.com/color/24/000000/great-britain.png"/>
                    <span style="padding-left: 10px">English</span>
                </a-select-option>
            </a-select>
        </div>
        <div class="header-top-account">
            <a-avatar class="top-account" icon="user" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onSearch (value) {
            console.log(value)
        },
        handleChange(value) {

        }
    }
}
</script>
<style src="./HeaderTop.css" scoped></style>


