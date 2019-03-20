<template>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
          <router-view />
          <!-- Setup vue progress bar -->
          <vue-progress-bar></vue-progress-bar>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>
<script>
export default {
    name: 'Layout'
}
</script>

