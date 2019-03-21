<template>
    <a-breadcrumb separator=">">
        <a-breadcrumb-item>
            <router-link to="/">
                <a-icon type="home" />
            </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
            <span>Application Lists</span>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>
<script>
export default {
    name: 'Breadcrumb'
}
</script>
