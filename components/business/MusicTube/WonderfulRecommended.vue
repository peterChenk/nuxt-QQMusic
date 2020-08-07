<template>
  <div class="mod_index mod_index--event mod_slide_box mod_bg js_box" id="focus_box">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">精彩推荐</i></h2>
      </div>
      <!-- swiper -->
      <div class="mod_event mod_slide">
        <div v-swiper:mySwiper="swiperOption" class="my-swiper">
          <ul class="swiper-wrapper">
            <li class="event_list__item slide__item swiper-slide" v-for="(item, index) in wonderfulRecommend"
              :key="index">
              <a :href="item.h5Url" class="event_list__link js_focus_jump" :data-type="item.type"
                data-stat="y_new.index.focus.click" data-id="002G9aKI3UbdsG" data-focusid="29580">
                <img :src="item.picUrl" class="event_list__pic" alt="">
              </a>
            </li>
          </ul>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets wf-pagination"></div>
        <div class="swiper-button-prev wf-prev" slot="button-prev"></div>
        <div class="swiper-button-next wf-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      wonderfulRecommend: {
        type: Array,
        defualt: []
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          spaceBetween: 30,
          // slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          pagination: {
            el: ".wf-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".wf-next",
            prevEl: ".wf-prev"
          }
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/index.css";
  @import "~/assets/scss/layout.css";
  @import "~/assets/scss/MusicTube.scss";

</style>
