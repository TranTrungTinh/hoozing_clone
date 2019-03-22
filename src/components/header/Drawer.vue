<template>
    <a-drawer
      title="Basic Drawer"
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
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
