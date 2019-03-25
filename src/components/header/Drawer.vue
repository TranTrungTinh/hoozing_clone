<template>
    <a-drawer
      title="MENU"
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <router-link v-for="(item, i) in navLinks" :to="item.link" :key="i" tag="div">
        <div class="drawer-item" @click="onClose">{{ item.title }}</div>
      </router-link>

      <div>
        <language />
      </div>
    </a-drawer>
</template>
<script>
import Language from '@/components/header/Language';

export default {
  components: { Language },
  props: {
    navLinks: { type: Array, default: () => [] },
    showLanguage: { type: Boolean, default: false },
    showUser: { type: Boolean, default: false },
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    }
  },
}
</script>
<style scoped>
.drawer-item {
  padding: 10px 0px;
  border-radius: 10px;
  color: #000;
  /* background: #ecf0f1; */
  margin: 10px 0;
  cursor: pointer;
}
</style>

