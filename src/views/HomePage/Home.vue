<template src="./Home.html"></template>
<style src="./Home.css" scoped></style>

<script>
import Thumbnail from '@/components/thumbnail/Thumbnail';

export default {
  components: { Thumbnail },
  data() {
      return {
          listItem: [
              {id: 1},
              {id: 2},
              {id: 3},
              {id: 4},
              {id: 5},
              {id: 6},
              {id: 7},
              {id: 8},
          ]
      }
  }
}
</script>

