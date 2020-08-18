<template>
  <div class="mod_index mod_index--album mod_slide_box mod_bg js_box" id="new_song_box">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">新碟首发</i></h2>
      </div>
      <!-- 切换 -->
      <div class="mod_index_tab" data-stat="y_new.index.new_song">
        <a v-for="(item, index) in typeList" :key="index" href="javascript:;" class="index_tab__item js_tag"
          :class="{ 'index_tab__item--current': active === index }" @click="switchRcomd(item, index)"
          :data-index="index" data-type="recomPlaylist">{{ item.name }}</a>
      </div>
      <!-- swiper -->
      <div class="mod_playlist mod_slide">
        <div v-swiper:mySwiper="swiperOption" class="my-swiper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide playlist__item slide__item  playlist__item--hover"
              onmouseover="this.className=(this.className+' playlist__item--hover')"
              onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
              data-albummid="004M91mx3KeKTZ" :data-albumid="item.mid" v-for="(item, index) in newDiscList" :key="index">
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover" style="visibility: visible;">
                  <nuxt-link :to="'/Album/' + item.mid"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album"
                    data-stat="y_new.index.album.albumpic" :data-albummid="item.mid" :data-albumid="item.mid"><img
                      :src="imgSrc(item)" data-original="" alt="item.title"
                      onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                      class="playlist__pic" style="display: block; visibility: visible;"><i
                      class="mod_cover__mask"></i><i class="mod_cover__icon_play js_play"
                      data-stat="y_new.index.album.play_btn"></i></nuxt-link>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt"><nuxt-link :to="'/Album/' + item.mid"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album"
                      data-stat="y_new.index.album.albumname" :data-albummid="item.mid"
                      :data-albumid="item.mid">{{item.name}}</nuxt-link></span>
                  <a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-stat="y_new.index.album.more"
                    data-type="2" :data-mid="item.mid"><span class="icon_txt">����</span></a>
                </h4>

                <div class="playlist__author" title="">

                  <nuxt-link :to="'/singerDetail/' + item.singers[0].mid"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_singer"
                    data-stat="y_new.index.album.singername" :data-singermid="item.singers[0].mid"
                    :title="item.singers[0].name">{{item.singers[0].name}}</nuxt-link>

                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets nd-pagination"></div>
        <div class="swiper-button-prev nd-prev" slot="button-prev"></div>
        <div class="swiper-button-next nd-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      newDiscArr: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        newDiscList: this.newDiscArr,
        active: 0,
        typeList: [{
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
          },
          {
            name: "其他",
            type: '6'
          }
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
    },
    methods: {
      async switchRcomd(item, index) {
        const res = await this.$api.newDisc(item.type)
        if (res.data.result === 100) {
          this.newDiscList = res.data.data.list
        }
        this.active = index
      },
      imgSrc(item) {
        return `//y.gtimg.cn/music/photo_new/T002R300x300M000${item.photo.pic_mid}.jpg?max_age=2592000`
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/index.css";
  @import "~/assets/scss/layout.css";
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
