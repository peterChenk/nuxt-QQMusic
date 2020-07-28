<template>
  <div class="mod_index mod_index--event mod_slide_box mod_bg js_box"
       id="focus_box">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">精彩推荐</i></h2>
      </div>
      <!-- swiper -->
      <div class="mod_event mod_slide">
        <div v-swiper:mySwiper="swiperOption"
             class="my-swiper">
          <ul class="swiper-wrapper">
            <li class="event_list__item slide__item swiper-slide"
                v-for="banner in banners"
                :key="banner">
              <a href="javascript:;"
                 class="event_list__link js_focus_jump"
                 data-type="10002"
                 data-stat="y_new.index.focus.click"
                 data-id="002G9aKI3UbdsG"
                 data-focusid="29580">
                <img src="//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/2769057.jpg?max_age=2592000"
                     class="event_list__pic"
                     alt="PCYQQ周深《化身孤岛的鲸》">
              </a>
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
        slidesPerView: 2,
        spaceBetween: 30,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
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
</style>