<template>
    <a-layout>
      <a-layout-header>
          <header-top />
      </a-layout-header>
      <a-layout-content>
          <router-view />
          <!-- Setup vue progress bar -->
          <vue-progress-bar></vue-progress-bar>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>

<script>
import HeaderTop from '@/components/header/HeaderTop'

export default {
    components: { HeaderTop },
    name: 'Layout'
}
</script>

<style src="./Layout.css" scoped></style>


