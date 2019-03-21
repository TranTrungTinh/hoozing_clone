<template>
  <a-list
    itemLayout="vertical"
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4}"
    size="large"
    :pagination="pagination"
    :dataSource="listData"
  >
    <a-list-item slot="renderItem" slot-scope="item" key="item.title">
      <thumbnail :item="item"/>
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

export default {
    components: { Thumbnail },
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
}
</script>
