<template>
  <swiper class="main" ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <recommend />
    </swiper-slide>
    <swiper-slide>
      <playlist />
    </swiper-slide>
    <swiper-slide>
      <ranking />
    </swiper-slide>
    <swiper-slide>
      <radioStation />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import recommend from './recommend/home'
import playlist from './playlist/home'
import ranking from './ranking/home'
import radioStation from './radioStation/home'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
    recommend,
    playlist,
    ranking,
    radioStation
  },
  data () {
    const nav = ['每日推荐', '歌单', '排行榜', '电台']
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + nav[index] + '</span>';
          },
        },
        initialSlide: 1,
      }
    }
  },

}
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
}
/deep/.swiper-wrapper {
  padding-top: 40px;
}
/deep/.swiper-slide {
  overflow: hidden;
}
/deep/.swiper-pagination {
  top: 0;
  right: 0;
  bottom: auto;
  width: auto;
  display: flex;
  justify-content: space-around;
  padding: 0 16px;
}
/deep/.swiper-pagination-bullet {
  width: auto;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #777;
  opacity: 1;
  outline: none;
  background: none;
}

/deep/.swiper-pagination-bullet-active {
  font-weight: 600;
  color: #333;
}
</style>