<template>
  <div>
    <div class="main-content">
      <div class="mod_data">
        <span class="data__cover">
          <img :src="singerPhoto"
               onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
               alt="周杰伦"
               class="data__photo js_index">
        </span>
        <div class="data__cont">
          <div class="data__name">
            <h1 class="data__name_txt js_none_index"
                style="display:none;">
              <a class="js_goto_tab"
                 data-stat="y_new.singer.thistab.singer_name"
                 :title="singerSongs.singer.name"
                 data-tab="index"
                 href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html">{{singerSongs.singer.name}}</a>
            </h1>
            <h1 class="data__name_txt js_index"
                :title="singerSongs.singer.name">{{singerSongs.singer.name}}</h1>

          </div>

          <div class="data__desc"
               id="singer_desc">
            <div class="data__desc_txt"
                 id="short_desc">
              {{basicAndDesc}}
            </div>

            <a href="javascript:;"
               class="js_desc"
               data-left="0"
               data-stat="y_new.singer.header.more_info"
               data-top="0"
               @click="popup_data_detail = !popup_data_detail"
               data-target="popup_data_detail">[更多]</a>

            <a href="javascript:;"
               class="js_accusation"
               data-type="7"
               data-id="4558">[举报]</a>
          </div>

          <ul class="mod_data_statistic">

            <li class="data_statistic__item">
              <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=song&amp;"
                 class="js_goto_tab"
                 data-stat="y_new.singer.header.song_tab"
                 data-tab="song"><span class="data_statistic__tit">单曲</span><strong class="data_statistic__number">{{singerSongs.total}}</strong></a>
            </li>

            <li class="data_statistic__item">
              <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=album&amp;"
                 class="js_goto_tab"
                 data-stat="y_new.singer.header.album_tab"
                 data-tab="album"><span class="data_statistic__tit">专辑</span><strong class="data_statistic__number">{{singerAlbum.total}}</strong></a>
            </li>

            <li class="data_statistic__item data_statistic__item--last">
              <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=mv&amp;"
                 class="js_goto_tab"
                 data-stat="y_new.singer.header.mv_tab"
                 data-tab="mv"><span class="data_statistic__tit">MV</span><strong class="data_statistic__number">{{singerMV.total}}</strong></a>
            </li>

          </ul>

          <div class="data__actions"
               role="toolbar">

            <a href="//y.qq.com/portal/player.html"
               class="mod_btn_green js_singer_radio"><i class="mod_btn_green__icon_play"></i>播放歌手热门歌曲</a>
            <a href="javascript:;"
               class="mod_btn js_follow"><i class="mod_btn__icon_more"
                 data-status="0"></i>关注 {{singerSongs.singer.fans | playVolume}}</a>

          </div>
        </div>
      </div>

      <!--首页 begin-->
      <div class="js_tab"
           id="index_tab">

        <div class="mod_part">
          <div class="part__hd">
            <h2 class="part__tit">热门歌曲</h2>

            <!-- <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=song&amp;"
               class="part__more js_goto_tab"
               data-stat="y_new.singer.index.song_all"
               data-tab="song">全部<i class="icon_part_arrow sprite"></i></a> -->

          </div>

          <div class="mod_songlist">
            <ul class="songlist__header">
              <li class="songlist__edit songlist__edit--check sprite">
                <input type="checkbox"
                       class="songlist__checkbox">
              </li>
              <li class="songlist__header_name">歌曲</li>
              <li class="songlist__header_album">专辑</li>
              <li class="songlist__header_time">播放量</li>
            </ul>

            <ul class="songlist__list">

              <li mid="97773" v-for="(item, index) in singerSongs.list" :key="index">
                <div class="songlist__item">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">{{index + 1}}</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       v-if="item.isonly === 1"
                       title="独家"></i>

                    <nuxt-link :to="'/MVDetail/' + item.mv.vid"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       v-if="item.mv.vid"
                       title="MV"><span class="icon_txt">MV</span></nuxt-link>

                    <span class="songlist__songname_txt"><nuxt-link :to="{path: '/songDetail/' + item.mid, query: { songId: item.id }}"
                         class="js_song"
                         :title="item.name">{{item.name}}</nuxt-link></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/000MkMni19ClKG.html"
                       :title="item.album.title">{{item.album.name}}</a>

                  </div>
                  <div class="songlist__time">{{item.listen_count | playVolume}}</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div id="page_box">
          <div class="client_guide"
               id="limitButton">
            <p class="client_guide__txt">查看更多内容，请下载客户端</p><a href="javascript:;"
               class="client_guide__btn js_limitButton">立即下载</a>
          </div>
        </div>

        <div class="mod_part">
          <div class="part__hd">
            <h2 class="part__tit">专辑</h2>

            <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=album&amp;"
               class="part__more js_goto_tab"
               data-stat="y_new.singer.index.album_all"
               data-tab="album">全部<i class="icon_part_arrow sprite"></i></a>

          </div>
          <div class="mod_playlist">
            <ul class="playlist__list"
                id="albumlist">

              <li class="playlist__item"
                  v-for="(item, index) in singerAlbum.list" :key="index"
                  onmouseover="this.className=(this.className+' playlist__item--hover')"
                  onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                  :data-albummid="item.album_mid"
                  :data-albumid="item.albumid">
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/album/0009C3rp3Kfwg0.html"
                       class="js_album"
                       data-stat="y_new.singer.index.album_pic"
                       :data-albummid="item.album_mid"
                       :data-albumid="item.albumid"><img :src="albumLogo(item)"
                           :alt="item.album_name"
                           onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                           class="playlist__pic"><i class="mod_cover__icon_play js_play"
                         data-stat="y_new.singer.index.album_play"></i></a></div>
                  <h4 class="playlist__title"><span class="playlist__title_txt"><nuxt-link :to="'/Album/' + item.album_mid"
                         :title="item.album_name"
                         class="js_album"
                         data-stat="y_new.singer.index.albumName"
                         :data-albummid="item.album_mid"
                         :data-albumid="item.albumid">{{item.album_name}}</nuxt-link></span></h4>
                  <div class="playlist__other">
                    {{item.pub_time}}
                  </div>
                  <a href="javascript:;"
                     class="btn_operate_menu js_albumlist_more"
                     data-type="2"
                     :data-mid="item.album_mid"><span class="icon_txt">更多</span></a>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div class="mod_part">
          <div class="part__hd">
            <h2 class="part__tit">MV</h2>

            <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=mv&amp;"
               class="part__more js_goto_tab"
               data-stat="y_new.singer.index.mv_all"
               data-tab="mv">全部<i class="icon_part_arrow sprite"></i></a>

          </div>
          <div class="mod_mv">
            <ul class="mv_list__list"
                id="mvlist">

              <li class="mv_list__item"
                  v-for="(item, index) in singerMV.list" :key="index"
                  :data-vid="item.vid"
                  :data-id="item.id">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/t0032kwa29w.html#stat=y_new.singer.index.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.mv_play"
                     :data-vid="item.vid"
                     :data-id="item.id"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         :src="item.pic"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         :alt="item.title">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/t0032kwa29w.html#stat=y_new.singer.index.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.mv_name"
                       :data-vid="item.vid"
                       :data-id="item.id"
                       :title="item.title">{{item.title}}</a></h3>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>{{item.listenCount | playVolume}}</span></div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>

        <div class="mod_part"
             id="similar"
             style="">
          <div class="part__hd">
            <h2 class="part__tit">相似歌手</h2>
          </div>
          <div class="mod_singer_list">
            <ul class="singer_list__list">

              <li class="singer_list__item" v-for="(item, index) in singerSim.list" :key="index">
                <div class="singer_list__item_box">
                  <nuxt-link :to="'/singerDetail/' + item.mid"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="singer_list__cover js_singer"
                     data-stat="y_new.singer.index.same_singers"
                     :data-mid="item.mid"
                     :data-id="item.id"
                     :title="item.name"
                     hidefocus="true">
                    <img class="singer_list__pic"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
                         :src="item.pic"
                         alt="item.name">
                  </nuxt-link>
                  <h3 class="singer_list__title">
                    <nuxt-link :to="'/singerDetail/' + item.mid"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_singer"
                       data-stat="y_new.singer.index.same_singers"
                       :data-mid="item.mid"
                       data-id="74"
                       :title="item.name">{{item.name}}</nuxt-link></h3>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <!--首页 end-->

      <!-- 单曲tab begin -->
      <div class="mod_part_detail js_tab"
           id="song_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">单曲 838</h2>
        </div>

        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手还没有发表过单曲</p>
        </div>
        <div class="js_content">
          <div class="mod_songlist_toolbar">
            <a href="//y.qq.com/portal/player.html"
               class="mod_btn js_all_play"
               data-stat="y_new.singer.song.playall"><i class="mod_btn__icon_play"></i>播放全部</a>
            <a href="javascript:;"
               class="mod_btn js_all_fav"
               data-stat="y_new.singer.song.addall"><i class="mod_btn__icon_add"></i>添加到</a>
            <a href="javascript:;"
               class="mod_btn js_all_down"
               data-stat="y_new.singer.song.downloadall"><i class="mod_btn__icon_down"></i>下载</a>
            <a href="javascript:;"
               class="mod_btn js_batch"
               data-stat="y_new.singer.song.batch"><i class="mod_btn__icon_batch"></i>批量操作</a>
          </div>

          <div class="mod_songlist">
            <ul class="songlist__header">
              <li class="songlist__edit songlist__edit--check sprite">
                <input type="checkbox"
                       class="songlist__checkbox js_check_all">
              </li>
              <li class="songlist__header_name">歌曲</li>
              <li class="songlist__header_album">专辑</li>
              <li class="songlist__header_time">时长</li>
            </ul>

            <ul class="songlist__list"
                id="song_box">
            </ul>
          </div>
        </div>
      </div>
      <!-- 单曲tab end -->

      <!-- 专辑tab begin -->
      <div class="mod_part_detail js_tab"
           id="album_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">专辑 35</h2>
        </div>
        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手还没有发表过专辑</p>
        </div>
        <div class="mod_playlist js_content">
          <ul class="playlist__list"
              id="album_box">
          </ul>
        </div>
      </div>
      <!-- 专辑tab end -->

      <!-- MV tab begin -->
      <div class="mod_part_detail js_tab"
           id="mv_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">MV 1983</h2>
        </div>
        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手还没有发表过MV</p>
        </div>
        <div class="mod_mv js_content">
          <ul class="mv_list__list"
              id="mv_box">
          </ul>
        </div>
      </div>
      <!-- MV tab end -->

      <!-- Fan MV tab begin -->
      <div class="mod_part_detail js_tab"
           id="fan_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit"></h2>
        </div>
        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手下还没有发表过爱豆视频</p>
        </div>
        <div class="mod_mv js_content">
          <ul class="mv_list__list"
              id="fan_box">
          </ul>
        </div>
      </div>
      <!-- Fan MV tab end -->

      <!-- 专辑简介 -->
      <div class="popup_data_detail"
          v-if="popup_data_detail"
           id="popup_data_detail"
           data-aria="popup"
           style="z-index:10000000000;">
        <div class="popup_data_detail__cont">
          <h3 class="popup_data_detail__tit">歌手简介</h3>
          {{basicAndDesc}}
        </div>
        <i class="popup_data_detail__arrow"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      singerDesc: {},
      basicAndDesc: '',
      singerPhoto: '',
      popup_data_detail: false,
      singerSongs: {
        singer: {
          name: ''
        }
      },
      singerAlbum: {},
      singerMV: {},
      singerSim: {}
    }
  },
  async asyncData ({ app, params }) {
    let singerPhoto = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${params.id}.jpg?max_age=2592000`
    // 歌手简介
    let singerDesc = []
    let basicAndDesc = []
    let res = await app.$api.singerDesc(params.id)
    if (res.data.result === 100) {
      singerDesc = res.data.data
      let str = []
      let str2 = []
      singerDesc.basic.item.forEach(ele => {
        str.push({'ele': ele.key + ':' + ele.value})
      })
      str.forEach(ele => {
        str2.push(ele.ele)
      })
      let basic = str2.join()
      basicAndDesc = basic + singerDesc.desc
    }
    // 歌手热门歌曲
    let singerSongs = {}
    let resSongs = await app.$api.singerSongs(params.id)
    if (resSongs.data.result === 100) {
      singerSongs = resSongs.data.data
    }
    // 歌手专辑
    let singerAlbum = {}
    let resAlbum = await app.$api.singerAlbum(params.id)
    if (resAlbum.data.result === 100) {
      singerAlbum = resAlbum.data.data
    }
    // 歌手MV
    let singerMV = {}
    let resMV = await app.$api.singerMV(params.id)
    if (resMV.data.result === 100) {
      singerMV = resMV.data.data
    }
    // 相似歌手
    let singerSim = {}
    let resSim = await app.$api.singerSim(params.id)
    if (resSim.data.result === 100) {
      singerSim = resSim.data.data
      singerSim.list = singerSim.list.slice(0, 5)
    }
    return {
      singerDesc,
      basicAndDesc,
      singerPhoto,
      singerSongs,
      singerAlbum,
      singerMV,
      singerSim
    }
  },
  methods: {
    albumLogo (item) {
      return `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~/assets/scss/singer_detail.css";
  @import "~/assets/scss/layout.css";
  .popup_data_detail{
    top: 128px;
    right: 85px;
  }
  .popup_data_detail__arrow{
    top: -11px;
    right: 65px;
    background-position: -11px 0!important;
    width: 17px;
    height: 11px;
  }
  .songlist__header_time{
    width: 100px;
  }
  .songlist__time{
    width: 100px;
  }
</style>