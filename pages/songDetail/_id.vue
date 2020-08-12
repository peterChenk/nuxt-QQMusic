<template>
  <div>
    <div class="main-content">
      <div class="mod_data"
           itemscope=""
           itemtype="http://schema.org/MusicRecording"
           style="display:;">
        <span class="data__cover">

          <img :src="photo_new(songData.track_info.album.mid)"
               onerror="this.src='//y.gtimg.cn/mediastyle/music_v11/extra/default_300x300.jpg?max_age=31536000';this.onerror=null;"
               :alt="songData.extras.name"
               class="data__photo">

        </span>
        <div class="data__cont">
          <div class="data__name">
            <h1 class="data__name_txt"
                :title="songData.extras.name">{{songData.extras.name}}</h1>
          </div>

          <div class="data__singer"
               :title="songData.track_info.singer.title">
            <i class="icon_singer sprite"></i>

            <nuxt-link :to="'/singerDetail/' + songData.track_info.singer[0].mid"
                       data-mid="001jDBSD0zRhYh"
                       :title="songData.track_info.singer.title"
                       class="data__singer_txt js_singer"
                       data-stat="y_new.song.header.singername"
                       itemprop="byArtist">{{songData.track_info.singer[0].name}}</nuxt-link>

          </div>

          <ul class="data__info">

            <li class="data_info__item data_info__item--even">专辑：
              <nuxt-link :to="'/Album/' + songData.track_info.album.mid"
                         itemprop="inAlbum"
                         class="js_album"
                         data-stat="y_new.song.header.albumname"
                         :data-albummid="songData.track_info.mid"
                         :data-albumid="songData.track_info.album.id"
                         :title="songData.track_info.album.title">{{songData.track_info.album.name}}</nuxt-link>
            </li>

            <li class="data_info__item js_lan"
                style="">语种：{{songData.info.lan.content[0].value}}</li>
            <li class="data_info__item js_genre data_info__item--even"
                style="">流派：{{songData.info.genre.content[0].value}}</li>

            <li class="data_info__item data_info__item--even js_company"
                style="display: none;">唱片公司：</li>

            <li class="data_info__item js_public_time"
                v-if="songData.info.pub_time"
                style="">发行时间：{{songData.info.pub_time.content[0].value}}</li>

          </ul>
          <div class="data__actions"
               role="toolbar">
            <a href="//y.qq.com/portal/player.html"
               class="mod_btn_green js_all_play"><i class="mod_btn_green__icon_play"></i>播放</a>

            <a href="javascript:;"
               class="mod_btn js_all_like"><i class="mod_btn__icon_like"></i>收藏</a>

            <a class="mod_btn js_into_comment"
               data-stat="y_new.song.gotocomment"
               href="#comment_box"><i class="mod_btn__icon_comment"></i>评论(4681)</a>
            <a href="javascript:;"
               class="mod_btn js_more"
               data-stat="y_new.song.header.more"
               data-id="256377340"
               data-songtype="0"
               data-mid="003mUfWC1ykBz8"><i class="mod_btn__icon_menu"></i>更多</a>

          </div>
        </div>
      </div>

      <div class="detail_layout">
        <div class="detail_layout__main">

          <!--歌词_S-->
          <div class="mod_lyric">
            <input id="copy_content"
                   style="display:none;">
            <div class="lyric__hd">
              <h2 class="lyric__tit">歌词</h2><a class="btn_copy sprite"
                 id="copy_link"
                 href="javascript:;"
                 onclick="copyLyric('copy_content');"
                 data-clipboard-target="#copy_content"
                 title="复制歌词"
                 data-clipboard-action="copy"><i class="icon_txt">复制</i></a>
            </div>
            <div class="lyric__cont limit">
              <div class="lyric__cont_box"
                   style="height: auto"
                   id="lrc_content">
                <pre>
                  {{lyricData.lyric.replace(/\[.*?\]/g,'')}}
                </pre>
              </div>
              <!-- <a href="javascript:;"
                 class="c_tx_highlight js_open_lyric">[展开]</a> -->
            </div>
          </div>
        </div>
        <div class="detail_layout__other">
          <div class="mod_about" id="album_desc" v-if="songData.info.intro && songData.info.intro.content">
            <h3 class="about__tit">简介</h3>
              <div class="about__cont">
                {{songData.info.intro.content[0].value}}
              </div>
              <a href="javascript:;" class="about__more" data-stat="y_new.song.moreinfo" 
              @click="popup_data_detail = !popup_data_detail"
              data-left="0" data-top="-185" data-target="popup_data_detail">[更多]</a>
          </div>

          <div class="other_part"
               style=""
               id="song_playlist">
            <h3 class="other_part__tit">相关热门歌单</h3>
            <div class="mod_playlist">
              <ul class="playlist__list">

                <li class="playlist__item"
                    v-for="(item, index) in songPlaylist"
                    :key="index"
                    onmouseover="this.className=(this.className+' playlist__item--hover')"
                    onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                    :data-disstid="item.tid">
                  <div class="playlist__item_box">
                    <div class="playlist__cover mod_cover">
                      <nuxt-link :to="'/playlistDetail/' + item.tid"
                                 onclick="setStatCookie&amp;&amp;setStatCookie();"
                                 class="js_playlist"
                                 data-stat="y_new.song.hotgedan.click"
                                 data-disstid="item.tid"><img :src="item.imgurl"
                             :alt="item.dissname"
                             class="playlist__pic"><i class="mod_cover__icon_play js_play"
                           data-stat="y_new.song.hotgedan.play"></i></nuxt-link>
                    </div>
                    <h4 class="playlist__title"><span class="playlist__title_txt">
                        <nuxt-link :to="'/playlistDetail/' + item.tid"
                                   onclick="setStatCookie&amp;&amp;setStatCookie();"
                                   class="js_playlist"
                                   data-stat="y_new.song.hotgedan.click"
                                   data-disstid="7667451063"
                                   :title="item.dissname">{{item.dissname}}</nuxt-link>
                      </span></h4>
                    <div class="playlist__author">
                      {{item.creator}}
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>

          <div class="other_part"
                v-if="songMV"
               id="song_mv">
            <h3 class="other_part__tit">相关MV</h3>
            <div class="mod_mv_list">
              <div class="mv_list__item_box"
                   data-vid=""
                   :data-id="songMV.mvid">
                <a href="https://y.qq.com/n/yqq/mv/v/d0025jq894n.html"
                   class="mv_list__cover mod_cover js_mv"
                   data-vid="songMV.vid"
                   data-id="songMV.mvid"
                   hidefocus="true">
                  <img class="mv_list__pic"
                       :src="songMV.picurl"
                       onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                       alt="songMV.title">
                  <i class="mod_cover__icon_play"></i>
                </a>
                <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/d0025jq894n.html"
                     class="js_mv"
                     data-vid="songMV.vid"
                     data-id="songMV.mvid"
                     :title="songMV.title">{{songMV.title}}</a></h3>

                <p class="mv_list__singer"
                    v-if="songMV.singers.length > 0"
                   :title="songMV.singers[0].name">

                  <nuxt-link :to="'/singerDetail/' + songMV.singers[0].mid"
                     data-mid="songMV.singers[0].mid"
                     :title="songMV.singers[0].name"
                     class="js_singer"> {{songMV.singers[0].name}} </nuxt-link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="popup_data_detail"
           id="popup_data_detail"
           v-if="popup_data_detail">
        <div class="popup_data_detail__cont">
          <h3 class="popup_data_detail__tit">专辑简介</h3>
          {{songData.info.intro.content[0].value}}
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
      songData: {
        info: {
          lan: {
            content: []
          },
          genre: {
            content: []
          },
          pub_time: {
            content: []
          }
        }
      },
      lyricData: '',
      songPlaylist: [],
      songMV: [],
      popup_data_detail: false
    }
  },
  async asyncData ({ app, params, query }) {
    let songData = []
    let res = await app.$api.songDetail(params.id)
    if (res.data.result === 100) {
      songData = res.data.data
    }
    let lyricData = []
    let reslyric = await app.$api.lyric(params.id)
    if (reslyric.data.result === 100) {
      lyricData = reslyric.data.data
      // alert(str.replace(/\[|]/g,''));//移除字符串中的所有[]括号（不包括其内容）
      // lyric.replace(/\[.*?\]/g,'') //移除字符串中的所有[]括号（包括其内容）
    }
    // 相关歌单
    let songPlaylist = []
    let reslist = await app.$api.songPlaylist(query.songId)
    if (reslist.data.result === 100) {
      songPlaylist = reslist.data.data
    }
    // 相关MV
    let songMV = []
    let resMV = await app.$api.songMV(query.songId)
    if (resMV.data.result === 100) {
      songMV = resMV.data.data
    }

    return {
      songData,
      lyricData,
      songPlaylist,
      songMV: songMV[0]
    }

  },
  methods: {
    photo_new (mid) {
      return `https://y.gtimg.cn/music/photo_new/T002R300x300M000${mid}.jpg`
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/song_detail.css";
@import "~/assets/scss/layout.css";
.lyric__cont_box {
  font-size: 14px;
  color: #666;
  line-height: 26px;
  // font-weight: bold;
  margin-top: -111px;
}
</style>