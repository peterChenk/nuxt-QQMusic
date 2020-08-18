<template>
  <div>
    <div class="main-content">
      <div class="mod_data"
           itemscope=""
           itemtype="http://schema.org/MusicRecording">
        <span class="data__cover">
          <img id="albumImg"
               :src="album.picUrl"
               onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
               :alt="album.name"
               class="data__photo">
          <i class="data__cover_mask"></i>
        </span>
        <div class="data__cont">
          <div class="data__name">
            <h1 class="data__name_txt"
                :title="album.name">{{album.name}}</h1>
          </div>

          <div class="data__singer">
            <i class="icon_singer sprite"></i><nuxt-link :to="'/singerDetail/' + album.ar[0].mid"
               class="js_singer data__singer_txt"
               itemprop="byArtist"
               :data-id="album.ar[0].id"
               data-stat="y_new.album.header.singername"
               :data-mid="album.ar[0].mid"
               :title="album.ar[0].name">{{album.ar[0].name}}</nuxt-link>
          </div>

          <ul class="data__info">

            <li class="data_info__item">流派：POP流行</li>

            <li class="data_info__item data_info__item--even">语种：国语</li>

            <li class="data_info__item">发行时间：{{album.publishTime}}</li>

            <li class="data_info__item data_info__item--even">唱片公司：<a href="//y.qq.com/portal/company_detail.html?id=2317">{{album.company}}</a></li>

          </ul>

          <div class="data__tips">已售 1148262 张</div>

          <div class="data__actions"
               role="toolbar">

            <!-- <a href="http://mobile.qzone.qq.com/l?g=2766&amp;id=1458791&amp;g_f=zhuanjiyebanner"
               class="mod_btn_green data__btn_buy js_digital_album"
               data-buy="0"
               data-buypage="http://mobile.qzone.qq.com/l?g=2766&amp;id=1458791&amp;g_f=zhuanjiyebanner"><span class="data__price">￥<strong>20</strong></span>立即购买</a>
            <a href="//y.qq.com/portal/player.html"
               class="mod_btn js_all_play"
               data-stat="y_new.album.header.playall"><i class="mod_btn__icon_play"></i>播放全部</a>

            <a href="javascript:;"
               class="mod_btn js_fav_album"
               data-stat="y_new.album.header.love"
               data-status="0"><i class="mod_btn__icon_like"></i>收藏</a>
            <a class="mod_btn js_into_comment"
               data-stat="y_new.album.gotocomment"
               href="#comment_box"><i class="mod_btn__icon_comment"></i>评论(13027)</a>
            <a href="javascript:;"
               class="mod_btn js_more"
               data-mid="003RMaRI1iFoYd"
               data-id="1458791"
               data-stat="y_new.album.header.more"><i class="mod_btn__icon_menu"></i>更多</a> -->
          </div>
        </div>
      </div>
      <div class="detail_layout">
        <div class="detail_layout__main">

          <div class="mod_tab"
               role="nav">
            <a class="mod_tab__item js_digital_tab mod_tab__current"
               data-tab="0"
               href="javascript:;">曲目列表</a>
            <a class="mod_tab__item js_digital_tab"
               data-tab="1"
               href="javascript:;">粉丝榜</a>
            <a class="mod_tab__item js_digital_tab"
               data-tab="2"
               href="javascript:;"
               style="display:none;">我的铭牌</a>
          </div>
          <div class="js_tab">
            <div class="mod_songlist">
              <ul class="songlist__header">
                <li class="songlist__edit songlist__edit--check sprite">
                  <input type="checkbox"
                         class="songlist__checkbox js_check_all">
                </li>
                <li class="songlist__header_name">歌曲</li>
                <li class="songlist__header_author">歌手</li>
                <li class="songlist__header_time">时长</li>
              </ul>

              <ul class="songlist__list"
                  id="song_box">

                <li mid="107192071" v-for="(item, index) in albumSongs" :key="index">
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
                           :title="item.title">{{item.name}}</nuxt-link></span>
                      <div class="mod_list_menu">
                        <nuxt-link :to="'/player/' + item.mid"
                           class="list_menu__item list_menu__play js_play"
                           title="播放">
                          <i class="list_menu__icon_play"></i>
                          <span class="icon_txt">播放</span>
                        </nuxt-link>
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
                           title="下载"
                           aria-haspopup="true"
                           data-target="menu_down">
                          <i class="list_menu__icon_down"></i>
                          <span class="icon_txt">下载</span>
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
                    <div class="songlist__artist">

                      <nuxt-link :to="'/singerDetail/' + item.singer[0].mid"
                         :title="item.singer[0].name"
                         class="singer_name">{{item.singer[0].name}}</nuxt-link>

                    </div>
                    <div class="songlist__time">03:46</div>
                    <div class="songlist__other">
                    </div>
                  </div>
                </li>

              </ul>

            </div>
            <div class="mod_songlist_toolbar mod_songlist_toolbar--edit js_foot_batch"
                 style="display:none;">
              <div class="songlist__edit songlist__edit--check sprite"
                   style="display:none;">
                <input type="checkbox"
                       class="songlist__checkbox js_check_all">
              </div>
              <a href="//y.qq.com/portal/player.html"
                 class="mod_btn js_all_play"
                 data-stat="y_new.album.songlist.playall"><i class="mod_btn__icon_play"></i>播放全部</a>
              <a href="javascript:;"
                 class="mod_btn js_all_fav"><i class="mod_btn__icon_add"></i>添加到</a>
              <a href="javascript:;"
                 class="mod_btn js_all_down"><i class="mod_btn__icon_down"></i>下载</a>
              <a href="javascript:;"
                 class="mod_btn js_batch"><i class="mod_btn__icon_batch"></i>批量操作</a>
            </div>
            <div id="page_box">
              <div class="client_guide"
                   id="limitButton">
                <p class="client_guide__txt">查看更多内容，请下载客户端</p><a href="javascript:;"
                   class="client_guide__btn js_limitButton">立即下载</a>
              </div>
            </div>

          </div>
          
        </div>

        <div class="detail_layout__other">
          <div class="mod_about"
               id="album_desc"
               style="display:;">
            <h3 class="about__tit">简介</h3>
            <div class="about__cont">
              <p>
                {{album.desc}}
              </p>
            </div>
            <a href="javascript:;"
               data-stat="y_new.album.moreinfo"
               class="about__more"
               data-left="0"
               data-top="-187"
               data-target="popup_data_detail"
               @click="popup_data_detail = !popup_data_detail"
               style="display:;">[更多]</a>
          </div>

        </div>
      </div>

      <!-- 专辑简介 -->
      <div class="popup_data_detail"
           id="popup_data_detail"
           data-aria="popup"
           v-if="popup_data_detail"
           style="z-index:10000000000;">
        <div class="popup_data_detail__cont">
          <h3 class="popup_data_detail__tit">专辑简介</h3>
          {{album.desc}}
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
      album: {
        ar: []
      },
      albumSongs: [],
      popup_data_detail: false
    }
  },
  async asyncData({app, params}) {
    // 专辑信息
    let album = {}
    let res = await app.$api.album(params.id)
    if (res.data.result === 100) {
      album = res.data.data
    }
    // 专辑内歌曲
    let albumSongs = []
    let resSongs = await app.$api.albumSongs(params.id)
    if (resSongs.data.result === 100) {
      albumSongs = resSongs.data.data.list
    }

    return {
      album,
      albumSongs
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~/assets/scss/album_detail.css";
  @import "~/assets/scss/layout.css";
</style>