<template>
  <div class="mod_index mod_index--hot mod_slide_box mod_bg">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">歌单推荐</i></h2>
      </div>
      <!-- 切换 -->
      <div class="mod_index_tab"
           data-stat="y_new.index.playlist">
        <a v-for="(item, index) in recommendedList"
           :key="index"
           href="javascript:;"
           class="index_tab__item js_tag"
           :class="{ 'index_tab__item--current': active === index }"
           @click="switchRcomd(item, index)"
           :data-index="index"
           data-type="recomPlaylist">{{ item.name }}</a>
      </div>
      <!-- swiper -->
      <div class="mod_playlist mod_slide">
        <div v-swiper:mySwiper="swiperOption"
             class="my-swiper">
          <div class="swiper-wrapper"
               v-if="recomdDataList.length > 0">
            <li class="playlist__item slide__item swiper-slide"
                v-for="(item, index) in recomdDataList"
                :key="index"
                onmouseover="this.className=(this.className+' playlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                :data-disstid="item.content_id">
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <nuxt-link :to="'/playlistDetail/' + item.content_id"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="js_playlist"
                     data-stat="y_new.index.playlist.pic"
                     :data-disstid="item.content_id || item.tid">
                    <img :src="item.cover || item.cover_url_big"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                         :alt="item.title"
                         class="playlist__pic"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play js_play"
                       data-stat="y_new.index.playlist.play_btn"></i>
                  </nuxt-link>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/3274706383.html#stat=y_new.index.playlist.name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_playlist"
                       data-stat="y_new.index.playlist.name"
                       :data-disstid="item.content_id">{{item.title}}</a></span>
                </h4>
                <div class="playlist__other">
                  播放量：{{unitConversion(item.listen_num || item.access_num)}}万
                </div>
              </div>
            </li>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets pr-pagination"
             slot="pagination"></div>
        <div class="swiper-button-prev pr-prev"
             slot="button-prev"></div>
        <div class="swiper-button-next pr-next"
             slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      recommendedList: [
        { name: "为你推荐", id: '' },
        { name: "经典", id: '59' },
        { name: "情歌", id: '71' },
        { name: "网络歌曲", id: '3056' },
        { name: "KTV热歌", id: '64' },
        { name: "民谣", id: '48' }
      ],
      banners: [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg",
        "/5.jpg",
        "/6.jpg",
        "/7.jpg",
        "/8.jpg"
      ],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".pr-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".pr-next",
          prevEl: ".pr-prev"
        },
        on: {
          slideChange () {
            // console.log("onSlideChangeEnd", this);
          },
          tap () {
            // console.log("onTap", this);
          }
        }
      },
      recomdDataList: this.recommendDataList
    }
  },
  props: {
    recommendDataList: {
      type: Array,
      default: []
    }
  },
  methods: {
    unitConversion (val) {
      if (val) {
        return (val / 10000).toFixed(1)
      }
    },
    async switchRcomd (item, index) {
      let res = ''
      if (!item.id) {
        res = await this.$api.recommendU()
      } else {
        res = await this.$api.recommendByType(item.id)
      }
      if (res.data.result === 100) {
        this.recomdDataList = res.data.data.list
      }
      this.active = index
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/index.css";
  @import "~/assets/scss/layout.css";
  @import "~/assets/scss/MusicTube.scss";
.mod_slide {
  // overflow: hidden;
  margin-bottom: 100px;
}

</style>