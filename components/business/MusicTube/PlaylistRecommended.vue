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
           @click="switchRcomd(item)"
           :data-index="index"
           data-type="recomPlaylist">{{ item.name }}</a>
      </div>
      <!-- swiper -->
      <div class="mod_playlist mod_slide">
        <div v-swiper:mySwiper="swiperOption"
             class="my-swiper">
          <div class="swiper-wrapper">
            <!-- <div class="swiper-slide"
                 v-for="banner in banners"
                 :key="banner"> -->
            <li class="playlist__item slide__item swiper-slide"
                v-for="banner in banners"
                :key="banner"
                onmouseover="this.className=(this.className+' playlist__item--hover')"
                onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                data-disstid="3274706383">
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover">
                  <a href="https://y.qq.com/n/yqq/playsquare/3274706383.html#stat=y_new.index.playlist.pic"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="js_playlist"
                     data-stat="y_new.index.playlist.pic"
                     data-disstid="3274706383">

                    <img src="//qpic.y.qq.com/music_cover/r9Js18hQauaHlf3udYvKsh7RI9Kd7fpiaJ4INX7F8U67PqkGp7G75kQ/300?n=1"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
                         alt="伤感华语 ：连歌词都能写到一个人的心里"
                         class="playlist__pic"><i class="mod_cover__mask"></i><i class="mod_cover__icon_play js_play"
                       data-stat="y_new.index.playlist.play_btn"></i>

                  </a>
                </div>
                <h4 class="playlist__title">

                  <span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/playsquare/3274706383.html#stat=y_new.index.playlist.name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_playlist"
                       data-stat="y_new.index.playlist.name"
                       data-disstid="3274706383">伤感华语 ：连歌词都能写到一个人的心里</a></span>

                </h4>
                <div class="playlist__other">
                  播放量：12642.3万
                </div>
              </div>
            </li>
            <!-- </div> -->
          </div>
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
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 5,
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
          slideChange () {
            // console.log("onSlideChangeEnd", this);
          },
          tap () {
            // console.log("onTap", this);
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/MusicTube.scss";
.mod_slide {
  // overflow: hidden;
  margin-bottom: 100px;
}
.mod_playlist .playlist__item {
  display: inline-block;
  width: 20%;
  padding-bottom: 44px;
  overflow: hidden;
  font-size: 14px;
  vertical-align: top;
}
.mod_index--hot .playlist__item {
  position: relative;
  width: 1.6%;
  padding-bottom: 0;
}
.mod_index--hot .playlist__item:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: 100%;
  padding-bottom: 66px;
}
.mod_playlist .playlist__item_box {
  position: relative;
  // margin-right: 20px;
  text-align: left;
}
.mod_index--hot .playlist__item_box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.mod_playlist .playlist__cover {
  position: relative;
  display: block;
  overflow: hidden;
  padding-top: 100%;
  margin-bottom: 15px;
}
.mod_playlist .playlist__pic {
  height: 100%;
  object-fit: cover;
}
.mod_playlist .playlist__pic {
  transform: scale(1) translateZ(0);
  transition: transform 0.75s;
}
.mod_playlist .playlist__pic {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-transform: scale(1) translateZ(0);
  -webkit-transition: -webkit-transform 0.75s;
}
.mod_cover__mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.mod_cover:hover .mod_cover__icon_play,
.mod_cover__icon_play {
  background-image: url("../../../assets/img/cover_play.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006");
  // background-image: -webkit-image-set(url(img/cover_play.png?max_age=2592000&v=88abebc…&v=88abebc…) 1x,url(img/cover_play@2x.png?max_age=2592000&v=88abebc…&v=88abebc…&v=10e4305…) 2x);
}
.mod_playlist .playlist__title {
  overflow: hidden;
}
.mod_playlist .playlist__title_txt {
  white-space: normal;
}
.mod_playlist .playlist__title_txt {
  float: left;
  max-width: 100%;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  max-height: 44px;
}
.mod_playlist .playlist__author,
.mod_playlist .playlist__author a,
.mod_playlist .playlist__other {
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22px;
  font-weight: 400;
}
.mod_playlist .playlist__cover:hover .playlist__pic {
  transform: scale(1.07) translateZ(0);
  transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
}
a:hover {
  color: #31c27c;
  text-decoration: none;
}
</style>