<template>
  <div class="container">
    <!-- 歌单推荐 -->
    <div class="mod_index mod_index--hot mod_slide_box mod_bg">
      <div class="section_inner">
        <div class="index__hd">
          <h2 class="index__tit">歌单推荐</h2>
        </div>
        <!-- 切换 -->
        <div class="mod_index_tab" data-stat="y_new.index.playlist">
          <a
            v-for="(item, index) in recommendedList"
            :key="index"
            href="javascript:;"
            class="index_tab__item js_tag"
            :class="{ 'index_tab__item--current': active === index }"
            @click="switchRcomd(item)"
            :data-index="index"
            data-type="recomPlaylist"
            >{{ item.name }}</a
          >
        </div>
        <!-- swiper -->
        <div class="mod_playlist mod_slide">
          <div v-swiper:mySwiper="swiperOption" class="my-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="banner in banners" :key="banner">
                <img :src="banner" />
              </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      recommendedList: [
        { name: "为你推荐" },
        { name: "韩语" },
        { name: "KTV热歌" },
        { name: "背景音乐" },
        { name: "90年代" },
        { name: "情歌" }
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
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChange() {
            console.log("onSlideChangeEnd", this);
          },
          tap() {
            console.log("onTap", this);
          }
        }
      }
    };
  },
  methods: {
    switchRcomd(item) {
      this.active = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.mod_index {
  position: relative;
  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      display: block;
    }
  }
}
.mod_index .section_inner {
  z-index: 2;
  // overflow: hidden;
}
.index__hd {
  position: relative;
  padding-top: 4.16667%;
  padding-bottom: 2%;
}
.mod_index--hot .index__tit {
  background-position: 0 0;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 10px;
}
.mod_index_tab {
  height: 50px;
  text-align: center;
  .index_tab__item {
    display: inline-block;
    font-size: 15px;
    margin: 0 24px;
    color: #333;
  }
  .index_tab__item--current {
    color: #31c27c;
  }
}
.mod_playlist {
  position: relative;
}
.my-swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
.swiper-button-prev,
.swiper-button-next {
  color: #999;
  position: absolute;
  z-index: 999;
  outline: none;
  display: none;
}
.swiper-button-next {
  right: -100px;
  left: auto;
}
.swiper-button-prev {
  left: -100px;
  right: auto;
}
</style>
