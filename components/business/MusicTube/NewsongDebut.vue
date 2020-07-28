<template>
  <div class="mod_index mod_index--song mod_slide_box js_box mod_bg"
       id="new_song_box">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">新歌首发</i></h2>
      </div>
      <!-- 切换 -->
      <div class="mod_index_tab"
           data-stat="y_new.index.new_song">
        <a v-for="(item, index) in typeList"
           :key="index"
           href="javascript:;"
           class="index_tab__item js_tag"
           :class="{ 'index_tab__item--current': active === index }"
           @click="switchRcomd(item)"
           :data-index="index"
           data-type="recomPlaylist">{{ item.name }}</a>
      </div>
      <!-- swiper -->
      <div class="mod_playlist mod_slide">
        <div v-swiper:mySwiper="swiperOption"
             class="my-swiper">
          <ul class="swiper-wrapper">
            <li class="songlist__item swiper-slide"
                v-for="banner in banners"
                :key="banner"
                mid="273454443"
                ix="67">

              <div class="songlist__edit songlist__edit--check sprite"
                   style="display:none;">
                <input type="checkbox"
                       class="songlist__checkbox">
              </div>

              <div class="songlist__item_box"
                   style="visibility: visible;">
                <a href="https://y.qq.com/n/yqq/album/004M91mx3KeKTZ.html"
                   title="等等"
                   data-albummid="004M91mx3KeKTZ"
                   data-albumid="13952172"
                   class="album_name songlist__link mod_cover">
                  <img class="songlist__pic"
                       src="//y.gtimg.cn/music/photo_new/T002R90x90M000004M91mx3KeKTZ_1.jpg?max_age=2592000"
                       data-original="//y.gtimg.cn/music/photo_new/T002R90x90M000004M91mx3KeKTZ_1.jpg?max_age=2592000"
                       onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                       style="display: block; visibility: visible;">
                  <i class="mod_cover__mask"></i>
                  <i class="mod_cover__icon_play js_play"
                     data-stat="y_new.index.new_song.play_btn"></i>
                </a>
                <div class="songlist__cont">
                  <h3 class="songlist__song"><a href="https://y.qq.com/n/yqq/song/002fhYIS0whRav.html#stat=y_new.index.new_song.songname"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       data-stat="y_new.index.new_song.songname"
                       class="js_song"
                       title="等等 《忘不了餐厅》第二季 综艺插曲">等等<span class="songlist__song_txt">《忘不了餐厅》第二季 综艺插曲</span></a></h3>

                  <p class="songlist__author"
                     title="赖美云">

                    <a href="https://y.qq.com/n/yqq/singer/001YMQJO2Av6y5.html#stat=y_new.index.new_song.singername"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       data-stat="y_new.index.new_song.singername"
                       data-singermid="001YMQJO2Av6y5"
                       data-singerid="2141459"
                       title="赖美云"
                       class="c_tx_thin singer_name">赖美云</a>

                  </p>
                </div>
                <div class="songlist__time c_tx_thin">03:57</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
        <div class="swiper-button-prev"
             slot="button-prev"></div>
        <div class="swiper-button-next"
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
      typeList: [
        { name: "最新" },
        { name: "内地" },
        { name: "港台" },
        { name: "欧美" },
        { name: "韩国" },
        { name: "日本" }
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
        "/5.jpg",
        "/6.jpg",
        "/7.jpg",
        "/8.jpg"
      ],
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 3,
        spaceBetween: 0,
        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
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