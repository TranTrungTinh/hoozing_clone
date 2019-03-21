<template>
  <a-list
    itemLayout="vertical"
    size="large"
    :grid="getResponse"
    :pagination="pagination"
    :dataSource="listData"
  >
    <a-list-item slot="renderItem" slot-scope="item" key="item.title">
      <thumbnail v-if="renderType === 1" :item="item"/>
      <thumbnail-list v-if="renderType === 2" :item="item" />
    </a-list-item>
  </a-list>
</template>
<script>
const listData = []
for (let i = 0; i < 41; i++) {
  listData.push({
    href: 'https://vue.ant.design/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  })
}
import Thumbnail from '@/components/thumbnail/Thumbnail';
import ThumbnailList from '@/components/thumbnail-list/ThumbnailList';

export default {
    components: { Thumbnail, ThumbnailList },
    props: {
      renderType: { type: Number, default: 1 }
    },
    data () {
        return {
            listData,
            pagination: {
                pageSize: 12,
            },
            actions: [
                { type: 'star-o', text: '156' },
                { type: 'like-o', text: '156' },
                { type: 'message', text: '2' },
            ],
        }
    },
    computed: {
      getResponse() {
        if(this.renderType === 1) // response grid type
          return { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }
        if(this.renderType === 2) // respone list type
          return { gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 } 
        return { gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }
      }
    }
}
</script>
