<template>
  <div class="mod_index mod_index--song mod_slide_box js_box mod_bg" id="new_song_box">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">新歌首发</i></h2>
      </div>
      <!-- 切换 -->
      <div class="mod_index_tab" data-stat="y_new.index.new_song">
        <a v-for="(item, index) in typeList" :key="index" href="javascript:;" class="index_tab__item js_tag"
          :class="{ 'index_tab__item--current': active === index }" @click="switchRcomd(item, index)"
          :data-index="index" data-type="recomPlaylist">{{ item.name }}</a>
      </div>
      <!-- swiper -->
      <div class="mod_playlist mod_slide">
        <div v-swiper:secondSwiper="swiperOption" class="my-swiper">
          <ul class="swiper-wrapper">
            <li class="songlist__item swiper-slide" v-for="(item) in newSongsList" :key="item.id" mid="273454443"
              ix="67">
              <div class="songlist__edit songlist__edit--check sprite" style="display:none;">
                <input type="checkbox" class="songlist__checkbox">
              </div>
              <div class="songlist__item_box" style="visibility: visible;">
                <a href="https://y.qq.com/n/yqq/album/004M91mx3KeKTZ.html" title="等等" data-albummid="004M91mx3KeKTZ"
                  data-albumid="13952172" class="album_name songlist__link mod_cover">
                  <img class="songlist__pic" :src="imgSrc(item)"
                    data-original="//y.gtimg.cn/music/photo_new/T002R90x90M000004M91mx3KeKTZ_1.jpg?max_age=2592000"
                    onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                    style="display: block; visibility: visible;">
                  <i class="mod_cover__mask"></i>
                  <i class="mod_cover__icon_play js_play" data-stat="y_new.index.new_song.play_btn"></i>
                </a>
                <div class="songlist__cont">
                  <h3 class="songlist__song"><a
                      href="https://y.qq.com/n/yqq/song/002fhYIS0whRav.html#stat=y_new.index.new_song.songname"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.new_song.songname"
                      class="js_song" :title="item.title"><span class="songlist__song_txt">{{item.name}}</span></a></h3>

                  <p class="songlist__author" :title="item.singer.name">

                    <a href="https://y.qq.com/n/yqq/singer/001YMQJO2Av6y5.html#stat=y_new.index.new_song.singername"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.new_song.singername"
                      data-singermid="001YMQJO2Av6y5" data-singerid="2141459" :title="item.singer[0].name"
                      class="c_tx_thin singer_name">{{item.singer[0].name}}</a>

                  </p>
                </div>
                <div class="songlist__time c_tx_thin">{{(item.interval / 60).toFixed(2)}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets ns-pagination" slot="pagination"></div>
        <div class="swiper-button-prev ns-prev" slot="button-prev"></div>
        <div class="swiper-button-next ns-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        typeList: [{
            name: "最新",
            type: '0'
          },
          {
            name: "内地",
            type: '1'
          },
          {
            name: "港台",
            type: '2'
          },
          {
            name: "欧美",
            type: '3'
          },
          {
            name: "韩国",
            type: '4'
          },
          {
            name: "日本",
            type: '5'
          }
        ],
        banners: [
          "/1.jpg",
          "/2.jpg",
          "/3.jpg",
          "/4.jpg",
          "/5.jpg",
          "/6.jpg",
          "/7.jpg",
          "/8.jpg",
          "/1.jpg",
          "/2.jpg",
          "/3.jpg",
          "/4.jpg",
          "/5.jpg",
          "/6.jpg",
          "/7.jpg",
          "/8.jpg",
          "/4.jpg",
          "/5.jpg",
        ],
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 3,
          slidesPerGroup: 9,
          // spaceBetween: 0,
          // loop: true,
          // loopFillGroupWithBlank: true,
          pagination: {
            el: ".ns-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".ns-next",
            prevEl: ".ns-prev"
          }
        },
        newSongsList: this.newSongs
      }
    },
    props: {
      newSongs: {
        type: Array,
        default: []
      }
    },
    methods: {
      async switchRcomd(item, index) {
        const res = await this.$api.newSongs(item.type)
        if (res.data.result === 100) {
          this.newSongsList = res.data.data.list
        }
        this.active = index
      },
      imgSrc(item) {
        return `//y.gtimg.cn/music/photo_new/T002R90x90M000${item.album.pmid}.jpg?max_age=2592000`
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/MusicTube.scss";

  .my-swiper {
    height: 430px;
    margin-left: auto;
    margin-right: auto;

    .swiper-slide {
      height: 111px;
      text-align: left;
      display: block;
      font-weight: normal;
      background: none !important;
    }

    .songlist__item_box {
      box-sizing: content-box;
    }
  }

</style>
