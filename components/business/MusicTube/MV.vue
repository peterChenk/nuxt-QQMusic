<template>
  <div class="mod_index mod_index--mv mod_slide_box mod_bg js_box" id="mv_box">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">MV首播</i></h2>
      </div>
      <!-- 切换 -->
      <div class="mod_index_tab" data-stat="y_new.index.new_song">
        <a v-for="(item, index) in typeList" :key="index" href="javascript:;" class="index_tab__item js_tag"
          :class="{ 'index_tab__item--current': active === index }" @click="switchRcomd(item,index)" :data-index="index"
          data-type="recomPlaylist">{{ item.name }}</a>
      </div>
      <!-- swiper -->
      <div class="mod_mv mod_slide">
        <div v-swiper:mySwiper="swiperOption" class="my-swiper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item, index) in MVListData" :key="index" data-vid="g0034ykznrl"
              data-id="1636889">
              <div class="mv_list__item_box" style="visibility: visible;">
                <a href="https://y.qq.com/n/yqq/mv/v/g0034ykznrl.html#stat=y_new.index.mv.play_btn"
                  onclick="setStatCookie&amp;&amp;setStatCookie();" class="mv_list__cover mod_cover js_mv"
                  data-stat="y_new.index.mv.play_btn" data-vid="g0034ykznrl" data-id="1636889" hidefocus="true">
                  <img class="mv_list__pic" :src="item.picurl"
                    data-original="//y.gtimg.cn/music/photo_new/T015R640x360M101000UP9ps4TtKLD.jpg?max_age=2592000"
                    onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                    :alt="item.mvtitle" style="display: block; visibility: visible;">
                  <i class="mod_cover__icon_play"></i>
                </a>
                <h3 class="mv_list__title"><a
                    href="https://y.qq.com/n/yqq/mv/v/g0034ykznrl.html#stat=y_new.index.mv.mvname"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_mv" data-stat="y_new.index.mv.mvname"
                    data-vid="g0034ykznrl" data-id="1636889" title="五月天《倔强》Live MV (Live)">{{item.mvtitle}}</a></h3>
                <p class="mv_list__singer">
                  <a href="https://y.qq.com/n/yqq/singer/000Sp0Bz4JXH0o.html#stat=y_new.index.mv.singername"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_singer"
                    :data-singermid="item.singer_mid" data-stat="y_new.index.mv.singername"
                    :data-singerid="item.singer_id" :title="item.singer_name">{{item.singer_name}}</a>
                  <!--div class="mv_list__info">2020-07-27</div-->
                </p>
                <div class="mv_list__info"><span class="mv_list__listen"><i
                      class="mv_list__listen_icon sprite"></i>{{item.listennum}}万</span></div>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets mv-pagination"></div>
        <div class="swiper-button-prev mv-prev" slot="button-prev"></div>
        <div class="swiper-button-next mv-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      MVList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        MVListData: this.MVList,
        active: 0,
        typeList: [{
            name: "精选",
            type: 0
          },
          {
            name: "内地",
            type: 1
          },
          {
            name: "港台",
            type: 2
          },
          {
            name: "欧美",
            type: 3
          },
          {
            name: "韩国",
            type: 4
          },
          {
            name: "日本",
            type: 5
          }
        ],
        swiperOption: {
          slidesPerView: 5,
          slidesPerColumn: 2,
          spaceBetween: 20,
          slidesPerGroup: 10,
          // loop: true,
          // loopFillGroupWithBlank: true,
          pagination: {
            el: ".mv-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".mv-next",
            prevEl: ".mv-prev"
          }
        }
      }
    },
    methods: {
      async switchRcomd(item, index) {
        const res = await this.$api.newMV(item.type)
        if (res.data.resultL === 100) {
          this.MVListData = res.data.data.list.slice(0, 20)
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
   
  .my-swiper {
    height: 465px;
    margin-left: auto;
    margin-right: auto;

    .swiper-slide {
      // height: 288px;
      height: calc((100% - 20px) / 2);
    }
  }

  .swiper-pagination {
    bottom: 10px;
  }

</style>
