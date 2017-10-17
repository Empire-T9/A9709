<template>
  <div class="home">
    <swiper loop auto :list="urlList" :index="swiperItemIndex" @on-index-change="onSwiperItemIndexChange"></swiper>
  </div>
</template>

<script>
  import { Swiper } from 'vux'

  const baseList = [{
    url: 'http://m.baidu.com',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'http://m.qq.com',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'http://m.youku.com',
    img: 'https://static.vux.li/demo/5.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg' //fallbackImg 在 v2.5.13 支持，它将在 img 加载失败时显示，注意的是 fallbackImg 可能会在 img 加载成功时也进行了加载，只是不会显示（取决于浏览器实现）。
  }]

  const urlList = baseList.map((item, index) => ({
    url: item.url,
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `${item.title}`
  }))

  export default {
    components: {
      Swiper
    },
    ready () {

    },
    methods: {
      onSwiperItemIndexChange (index) {
        console.log('demo item change', index)
        this.swiperItemIndex = index
      }
    },
    data () {
      return {
        urlList: urlList,
        swiperItemIndex: 0
      }
    }
  }
</script>

<style scoped>

</style>
