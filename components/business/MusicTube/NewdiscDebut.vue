<template>
  <div class="mod_index mod_index--album mod_slide_box mod_bg js_box"
       id="new_song_box">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">新碟首发</i></h2>
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
            <li class="swiper-slide playlist__item slide__item  playlist__item--hover"
                onmouseover="this.className=(this.className+' playlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                data-albummid="004M91mx3KeKTZ"
                data-albumid="13952172"
                v-for="banner in banners"
                :key="banner">
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover"
                     style="visibility: visible;">
                  <a href="https://y.qq.com/n/yqq/album/004M91mx3KeKTZ.html#stat=y_new.index.album.albumpic"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="js_album"
                     data-stat="y_new.index.album.albumpic"
                     data-albummid="004M91mx3KeKTZ"
                     data-albumid="13952172"><img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004M91mx3KeKTZ_1.jpg?max_age=2592000"
                         data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000004M91mx3KeKTZ_1.jpg?max_age=2592000"
                         alt="等等"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                         class="playlist__pic"
                         style="display: block; visibility: visible;"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play js_play"
                       data-stat="y_new.index.album.play_btn"></i></a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/album/004M91mx3KeKTZ.html#stat=y_new.index.album.albumname"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_album"
                       data-stat="y_new.index.album.albumname"
                       data-albummid="004M91mx3KeKTZ"
                       data-albumid="13952172">等等</a></span>
                  <a href="javascript:;"
                     class="btn_operate_menu js_albumlist_more"
                     data-stat="y_new.index.album.more"
                     data-type="2"
                     data-mid="004M91mx3KeKTZ"><span class="icon_txt">����</span></a>
                </h4>

                <div class="playlist__author"
                     title="赖美云">

                  <a href="https://y.qq.com/n/yqq/singer/001YMQJO2Av6y5.html#stat=y_new.index.album.singername"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="js_singer"
                     data-stat="y_new.index.album.singername"
                     data-singermid="001YMQJO2Av6y5"
                     title="赖美云">赖美云</a>

                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets nd-pagination"></div>
        <div class="swiper-button-prev nd-prev"
             slot="button-prev"></div>
        <div class="swiper-button-next nd-next"
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
        { name: "内地" },
        { name: "港台" },
        { name: "欧美" },
        { name: "韩国" },
        { name: "日本" },
        { name: "其他" }
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
        "/4.jpg",
        "/5.jpg",
        "/6.jpg",
        "/7.jpg",
        "/8.jpg"
      ],
      swiperOption: {
        slidesPerView: 5,
        slidesPerColumn: 2,
        spaceBetween: 20,
        slidesPerGroup: 5,
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".nd-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".nd-next",
          prevEl: ".nd-prev"
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/MusicTube.scss";
.my-swiper {
  height: 660px;
  margin-left: auto;
  margin-right: auto;
  .swiper-slide {
    height: 288px;
  }
}
.swiper-pagination {
  bottom: 10px;
}
</style>