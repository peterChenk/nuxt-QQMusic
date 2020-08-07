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
                    <a href="https://y.qq.com/n/yqq/song/270029523_num.html#stat=y_new.index.toplist.songname"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_song" :data-id="item2.songId"
                      data-stat="y_new.index.toplist.songname">{{item2.title}}</a>
                  </div>
                  <div class="toplist__artist">
                    <a href="https://y.qq.com/n/yqq/singer/001aAX6V1QArFZ.html#stat=y_new.index.toplist.singername"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" data-stat="y_new.index.toplist.singername">
                      {{item2.singerName}}</a>
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
  a:hover {
    color: #fff;
  }

  /* // .mod_index {
  //   position: relative;
  // }
  // .mod_index--top .section_inner {
  //   padding-bottom: 4%;
  // }
  // .index__hd {
  //   position: relative;
  //   padding-top: 4.16667%;
  //   padding-bottom: 2%;
  // }
  // .index__tit {
  //   background-position: 0 0;
  //   text-align: center;
  //   font-size: 32px;
  //   font-weight: bold;
  //   letter-spacing: 10px;
  // }
  // .mod_index--top .index__more {
  //   top: 56px;
  // }
  // .index__more {
  //   position: absolute;
  //   right: 0;
  //   top: initial;
  // }
  // .toplist__list {
  //   font-size: 0;
  //   margin-right: -20px;
  // }
  // .toplist__item {
  //   display: inline-block;
  //   z-index: 2;
  //   width: 20%;
  // }
  // .mod_cover {
  //   zoom: 1;
  // }
  // .toplist__box {
  //   position: relative;
  //   margin-right: 20px;
  //   height: 500px;
  //   overflow: hidden;
  // }
  // .toplist__item.item1 .toplist__bg {
  //   background-position: 0 0;
  // }
  // .toplist__item.item2 .toplist__bg {
  //   background-position: -224px 0;
  // }
  // .toplist__item.item3 .toplist__bg {
  //   background-position: -448px 0;
  // }
  // .toplist__item.item4 .toplist__bg {
  //   background-position: -672px 0;
  // }
  // .toplist__item.item5 .toplist__bg {
  //   background-position: -896px 0;
  // }
  // .toplist__item .toplist__bg {
  //   -webkit-transform: scale(1);
  //   -webkit-transition: -webkit-transform 0.75s;
  //   transform: scale(1);
  //   transition: transform 0.75s;
  // }
  // .toplist__bg {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   height: 567px;
  //   background-image: url(../../../assets/img/bg_index_top.jpg?max_age=2592000&v=3beef369200a0863560787fd560c8205);
  // }
  // .toplist__item .mod_cover__icon_play {
  //   background-size: 72%;
  //   background-repeat: no-repeat;
  //   background-position: 50%;
  // }
  // .toplist__item .mod_cover__icon_play {
  //   top: 114px;
  //   margin-top: 0;
  //   margin-bottom: 0;
  // }
  // .mod_cover:hover .mod_cover__icon_play,
  // .mod_cover__icon_play {
  //   background-image: url(../../../assets/img/cover_play.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006);
  //   // background-image: -webkit-image-set(url(img/cover_play.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006&v=88abebcbc1242dbbbbc836cc3e04a006) 1x,url(img/cover_play@2x.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006&v=88abebcbc1242dbbbbc836cc3e04a006&v=10e4305a2558d496548955434eaa30d9) 2x);
  // }
  // .toplist__line {
  //   position: absolute;
  //   left: 50%;
  //   top: 148px;
  //   margin-left: -18px;
  //   width: 36px;
  //   height: 2px;
  //   background: #fff;
  // }
  // .toplist__hd {
  //   position: absolute;
  //   top: 50px;
  //   left: 50%;
  //   margin-left: -100px;
  //   width: 200px;
  //   text-align: center;
  // }
  // .toplist__hd:before {
  //   content: "";
  //   display: block;
  //   width: 66px;
  //   height: 22px;
  //   margin: 0 auto 9px;
  //   background-image: url(../../../assets/img/index_tit.png?max_age=2592000&v=c7310a1eb12fc9fce032314be79ad579);
  //   // -webkit-image-set(url(../img/index_tit.png?max_age=2592000&v=c7310a1eb12fc9fce032314be79ad579&v=c7310a1eb12fc9fce032314be79ad579) 1x,url(img/index_tit@2x.png?max_age=2592000&v=c7310a1eb12fc9fce032314be79ad579&v=c7310a1eb12fc9fce032314be79ad579&v=832652e82398ecb5a5cd2fed700baee2) 2x)
  //   background-position: 0 -300px;
  // }
  // .toplist__tit {
  //   height: 36px;
  //   line-height: 1;
  //   font-size: 26px;
  //   color: #fff;
  //   font-weight: 400;
  // }
  // .toplist__songlist,
  // .toplist__songlist a {
  //   color: #fff;
  //   font-size: 14px;
  // }
  // .toplist__songlist {
  //   position: absolute;
  //   top: 188px;
  //   left: 30px;
  //   right: 30px;
  //   white-space: nowrap;
  // }
  // .toplist__song {
  //   position: relative;
  //   padding-left: 15px;
  //   margin-bottom: 27px;
  // }
  // .toplist__number {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }
  // .toplist__songname {
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   margin-bottom: 5px;
  // }
  // .toplist__songlist,
  // .toplist__songlist a {
  //   color: #fff;
  //   font-size: 14px;
  // }
  // .toplist__artist {
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  // }
  // .toplist__item:hover .toplist__bg {
  //   -webkit-transform: scale(1.06);
  //   -webkit-transition: -webkit-transform 0.75s cubic-bezier(0, 1, 0.75, 1);
  //   transform: scale(1.06);
  //   transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
  // }
  // .mod_cover__icon_play {
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   margin: -35px;
  //   width: 70px;
  //   height: 70px;
  //   filter: alpha(opacity=0);
  //   opacity: 0;
  //   -webkit-transform: scale(0.7) translateZ(0);
  //   -webkit-transition-property: opacity, -webkit-transform;
  //   -webkit-transition-duration: 0.5s;
  //   transform: scale(0.7) translateZ(0);
  //   transition-property: opacity, transform;
  //   transition-duration: 0.5s;
  //   zoom: 1;
  // }
  // .mod_cover:hover .mod_cover__icon_play {
  //   background: 0 0\9;
  //   filter: progid:dximagetransform.microsoft.alphaimageloader(src="http://imgcache.gtimg.cn/mediastyle/yqq/img/cover_play.png", sizingmethod="crop") alpha(opacity=90);
  //   opacity: 0.9;
  //   -webkit-transform: scale(1) translateZ(0);
  //   -webkit-transition-property: opacity, -webkit-transform;
  //   -webkit-transition-duration: 0.5s;
  //   transform: scale(1) translateZ(0);
  //   transition-property: opacity, transform;
  //   transition-duration: 0.5s;
  //   cursor: pointer;
  // }
  // .mod_cover:hover .mod_cover__icon_play,
  // .mod_cover__icon_play {
  //   background-image: url("../../../assets/img/cover_play.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006");
  //   // background-image: -webkit-image-set(
  //   //   url(../../../assets/img/cover_play.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006&v=88abebcbc1242dbbbbc836cc3e04a006)
  //   //     1x,
  //   //   url(../../../assets/img/cover_play@2x.png?max_age=2592000&v=88abebcbc1242dbbbbc836cc3e04a006&v=88abebcbc1242dbbbbc836cc3e04a006&v=10e4305a2558d496548955434eaa30d9)
  //   //     2x
  //   // );
  // }
  // .mod_cover:hover .mod_cover__icon_play {
  //   opacity: 1;
  //   filter: none;
  // }
  // .mod_songlist .mod_cover .mod_cover__icon_play:hover,
  // .mod_songlist .mod_cover__icon_play {
  //   background-size: 68%;
  //   background-repeat: no-repeat;
  //   background-position: 50%;
  // }
  // .toplist__item:hover .toplist__line {
  //   display: none;
  // } */

</style>
