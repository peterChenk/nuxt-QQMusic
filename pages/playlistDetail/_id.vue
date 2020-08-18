<template>
  <div>
    <div class="main-content">

      <div class="mod_data"
           itemscope=""
           itemtype="http://schema.org/MusicRecording">
        <!-- 自建歌单用a标签 -->

        <span class="data__cover"
              id="logo">
          <img :src="songListDetail.logo"
               onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
               :alt="songListDetail.desc"
               class="data__photo">
        </span>
        <a href="javascript:;"
           class="data__cover js_edit"
           id="edit_logo"
           data-target="popup_upload_cover"
           onclick="resetImg();statistics.pgvClickStat('y_new.gedan.header.edit_logo');"
           style="display:none;">
          <img :src="songListDetail.logo"
               onerror="this.src='//y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000';this.onerror=null;"
               :alt="songListDetail.desc"
               class="data__photo">
          <i class="data__cover_edit sprite"></i>
        </a>
        <div class="data__cont">
          <div class="data__name js_box"
               data-type="p_title">
            <h1 class="data__name_txt"
                :title="songListDetail.dissname"
                id="p_name_show">{{songListDetail.dissname}}</h1>
            <a href="javascript:;"
               class="btn_edit sprite js_edit"
               style="display:none;"><i class="icon_txt">编辑</i></a>
            <div class="mod_form_txt js_edit_box"
                 style="display:none;">
              <input type="text"
                     :value="songListDetail.dissname"
                     class="form_txt__input"
                     id="p_name"><span class="form_txt__tips"
                    id="name_leftnum">0</span>
            </div>
          </div>
          <div class="data__singer">
            <i class="icon_singer sprite"></i><a href="javascript:;"
               :title="songListDetail.nickname"
               class="data__singer_txt js_user"
               data-stat="y_new.gedan.header.nickname"
               itemprop="byArtist">{{songListDetail.nickname}}</a>
          </div>
          <ul class="data__info">
            <li class="data_info__item js_box"
                data-type="p_tags"
                style="display:;">
              <div class="data_tag_box">
                标签：<span id="choosebox1">
                  <a href="javascript:;"
                     v-for="(item, index) in songListDetail.tags"
                     :key="index"
                     class="data_info__tags js_jump"
                     data-id="166">{{item.name}}</a>
                </span>
              </div>
            </li>
            <!--li class="data_info__item">创建时间：2017-06-30</li-->
            <li class="data_info__item">播放量：{{songListDetail.visitnum | playVolume}}万</li>
            <li class="data_info__item">收藏量：1.6万</li>
          </ul>

          <div class="data__actions"
               role="toolbar">
            <a href="javascript:;"
               class="mod_btn_green js_all_play"
               data-stat="y_new.gedan.header.playall"><i class="mod_btn_green__icon_play"></i>播放全部</a>
            <a href="javascript:;"
               class="mod_btn js_fav_taoge"
               data-stat="y_new.gedan.header.love"
               data-status="0"><i class="mod_btn__icon_like"></i>收藏</a>
            <a class="mod_btn js_into_comment"
               data-stat="y_new.gedan.gotocomment"
               href="#comment_box"><i class="mod_btn__icon_comment"></i>评论(51)</a>
            <a href="javascript:;"
               class="mod_btn js_more"
               data-stat="y_new.gedan.header.more"
               data-id="2670809622"><i class="mod_btn__icon_menu"></i>更多</a>
          </div>
        </div>
      </div>

      <div class="detail_layout">
        <div class="detail_layout__main js_main">

          <div class="mod_songlist">
            <ul class="songlist__header">
              <li class="songlist__edit songlist__edit--check sprite">
                <input type="checkbox"
                       class="songlist__checkbox js_check_all">
              </li>
              <li class="songlist__header_name">歌曲</li>
              <li class="songlist__header_author">歌手</li>
              <li class="songlist__header_album">专辑</li>
              <li class="songlist__header_time">时长</li>
            </ul>

            <ul class="songlist__list">

              <li :mid="item.songid"
                  v-for="(item, index) in songListDetail.songlist"
                  :key="index"
                  :ix="index">

                <div class="songlist__item"
                     onmouseover="this.className=(this.className+' songlist__item--hover')"
                     onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">{{index + 1}}</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       v-if="item.isonly === 1"
                       title="独家"></i>

                    <nuxt-link :to="'/MVDetail/' + item.vid"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       v-if="item.vid"
                       title="MV"><span class="icon_txt">MV</span></nuxt-link>

                    <i class="songlist__icon songlist__icon_vip sprite"
                       v-if="item.pay.payplay === 1"
                       title="VIP"></i>

                    <span class="songlist__songname_txt">
                      <nuxt-link :to="{path: '/songDetail/' + item.songmid, query: { songId: item.songid }}"
                         class="js_song"
                         :title="item.songname">{{item.songname}}<span class="songlist__song_txt"></span></nuxt-link></span>
                    <div class="mod_list_menu">
                      <nuxt-link :to="'/player/' + item.songmid"
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

                  <div class="songlist__artist"
                       :title="item.singer[0].name">

                    <nuxt-link :to="'/singerDetail/' + item.singer[0].mid"
                       :data-singermid="item.singer[0].mid"
                       :data-singerid="item.singer[0].id"
                       :title="item.singer[0].name"
                       class="singer_name">{{item.singer[0].name}}</nuxt-link>

                  </div>
                  <div class="songlist__album">
                    <nuxt-link :to="'/Album/' + item.albummid"
                       :title="item.albumname"
                       class="album_name"
                       :data-albummid="item.albummid"
                       :data-albumid="item.albumid">{{item.albumname}}</nuxt-link>
                  </div>
                  <div class="songlist__time">{{(item.interval / 60).toFixed(2)}}</div>
                  <div class="songlist__other">

                  </div>
                  <a href="javascript:;"
                     class="songlist__delete js_delete"
                     data-confirm="1"
                     title="删除"><span class="icon_txt">删除</span></a>
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
            <a href="javascript:;"
               class="mod_btn js_all_play"
               data-stat="y_new.gedan.songlist.playall"><i class="mod_btn__icon_play"></i>播放全部</a>
            <a href="javascript:;"
               class="mod_btn js_all_fav"><i class="mod_btn__icon_add"></i>添加到</a>
            <a href="javascript:;"
               class="mod_btn js_all_down"><i class="mod_btn__icon_down"></i>下载</a>
            <a href="javascript:;"
               class="mod_btn js_all_delete"
               style="display:none;"><i class="mod_btn__icon_delete"></i>删除</a>
            <a href="javascript:;"
               class="mod_btn js_batch"><i class="mod_btn__icon_batch"></i>批量操作</a>
          </div>
          <!-- <div id="page_box">
            <div class="client_guide"
                 id="limitButton">
              <p class="client_guide__txt">查看更多内容，请下载客户端</p><a href="javascript:;"
                 class="client_guide__btn js_limitButton">立即下载</a>
            </div>
          </div> -->
        </div>
        <div class="detail_layout__other">
          <div class="mod_about js_box"
               id="album_desc"
               style="display:;">
            <h3 class="about__tit">简介</h3>
            <div class="about__cont">
              <p>{{songListDetail.desc}}</p>
            </div>
            <a href="javascript:;"
               class="about__more"
               data-stat="y_new.gedan.moreinfo"
               data-left="0"
               data-top="-187"
               data-target="popup_data_detail"
               style="display: none;">[更多]</a>
          </div>

        </div>
        <!-- 专辑简介 -->
        <div class="popup_data_detail"
             id="popup_data_detail"
             data-aria="popup"
             style="display:none;z-index:1000000;">
          <div class="popup_data_detail__cont">
            <h3 class="popup_data_detail__tit">简介</h3>
            <p>从八十年代至今，港乐有太多经典。尽管跨越了几代人的青春，它的美都能被不同年龄段的人所接纳。让我们一次性回味港乐黄金年代的美丽之声。</p>
          </div>
          <i class="popup_data_detail__arrow"></i>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      songListDetail: []
    }
  },
  async asyncData ({ app, params }) {
    let songListDetail = []
    let res = await app.$api.songList(params.id)
    if (res.data.result === 100) {
      songListDetail = res.data.data
      songListDetail.songlist = songListDetail.songlist.slice(0, 10)
    }
    return {
      songListDetail
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/playlistDetail.css";
@import "~/assets/scss/layout.css";
</style>