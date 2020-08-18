<template>
  <div class="mod_index mod_index--top mod_slide_box mod_bg js_box" id="toplist_box" style="display:;">
    <div class="section_inner">
      <div class="index__hd">
        <h2 class="index__tit"><i class="icon_txt">排行榜</i></h2>
      </div>
      <a href="javascript:;" class="index__more js_more" data-type="toplist">更多<i
          class="icon_index_arrow sprite"></i></a>
      <div class="mod_toplist">
        <ul class="toplist__list js_list">
          <li class="toplist__item mod_cover" :class="'item' + (index + 1)" v-for="(item, index) in rankingList">
            <div class="toplist__box">
              <div class="toplist__bg"></div>
              <i class="mod_cover__icon_play js_play_toplist" data-stat="y_new.index.toplist.play.26" data-id="26"
                data-type="0" data-date="2020_30"></i>
              <i class="toplist__line"></i>
              <h3 class="toplist__hd"><a
                  href="https://y.qq.com/n/yqq/toplist/26.html#stat=y_new.index.toplist.detail.26"
                  onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.detail.26"
                  class="toplist__tit">{{item.label}}</a></h3>
              <ul class="toplist__songlist">

                <li class="toplist__song" v-for="(item2, index2) in item.song">
                  <div class="toplist__number">{{index2 + 1}}</div>
                  <div class="toplist__songname">
                    <nuxt-link :to="'/Album/' + item2.albumMid"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" :data-id="item2.songId"
                      data-stat="y_new.index.toplist.songname">{{item2.title}}</nuxt-link>
                  </div>
                  <div class="toplist__artist">
                    <nuxt-link :to="'/singerDetail/' + item2.singerMid"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">
                      {{item2.singerName}}</nuxt-link>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      rankingList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {

      }
    }
  }

</script>
<style lang="scss" scoped>
 @import "~/assets/scss/index.css";
 @import "~/assets/scss/layout.css";
  a:hover {
    color: #fff;
  }
</style>
