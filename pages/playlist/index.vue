<template>
  <div>
    <!-- 头部 -->
    <div class="main-content">

      <!-- 标签筛选 -->
      <div class="mod_playlist_tag" id="taglist">
        <div class="js_normal" style="display:;">

          <div class="playlist_tag__list" v-for="(item, index) in typeListCategory" :key="index"
            :class="{'playlist_tag__list--lang': index === 0}">
            <h3 class="playlist_tag__tit c_tx_thin">{{item.type}}</h3>

            <i class="playlist_tag__line"></i>

            <ul class="playlist_tag__tags">

              <li class="playlist_tag__itembox" v-for="(item2, index2) in item.list"
                @click="changelist(index, item2, index2)"><a href="javascript:;" class="playlist_tag__item js_tag"
                  :class="{'playlist_tag__item--select': selected === index + '' + index2}"
                  :data-id="item2.id">{{item2.name}}</a></li>

              <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_more_tag"
                  @click="popup_tag1 = !popup_tag1">更多<i class="playlist_tag__arrow sprite"></i></a></li>

            </ul>
          </div>

          <div class="popup_tag" v-if="popup_tag1">
            <ul class="playlist_tag__tags">

              <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag"
                  data-id="170">小语种</a></li>

              <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag"
                  data-id="203">闽南语</a></li>

              <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag"
                  data-id="204">法语</a></li>

              <li class="playlist_tag__itembox"><a href="javascript:;" class="playlist_tag__item js_tag"
                  data-id="205">拉丁语</a></li>

            </ul>
          </div>

        </div>
        <div class="js_1024" style="display: none;">
        </div>
      </div>

      <div class="mod_part_detail">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">全部歌单</h2>
          <div class="part_switch" id="sortbox" aria-label="排列方式"><a href="javascript:;"
              class="part_switch__item js_sort part_switch__item--left part_switch__item--select" title="推荐"
              data-sort="5">推荐</a><a href="javascript:;" class="part_switch__item part_switch__item--right js_sort"
              title="最新" data-sort="2">最新</a></div>
        </div>
        <div class="mod_playlist mod_playlist--all">
          <ul class="playlist__list" id="playlist_box">


            <li class="playlist__item" :data-disstid="item.dissid" v-for="(item, index) in songList"
              onmouseover="this.className=(this.className+' playlist__item--hover')"
              onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover" style="visibility: visible;"><a
                    href="https://y.qq.com/n/yqq/playsquare/3552291790.html#stat=y_new.playlist.pic_click"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist" :title="item.dissname"
                    :data-disstid="item.dissid" data-stat="y_new.playlist.pic_click"><img :src="item.imgurl"
                      data-original="//p.qpic.cn/music_cover/YEqzCcJKAOwd4o0ib8yGnjpcIhaUr2G4LcJmflibDkx5YJTZfYcOQraA/300?n=1"
                      onerror="this.src='//y.gtimg.cn/mediastyle/global/img/cover_playlist.png?max_age=31536000';this.onerror=null;"
                      :alt="item.dissname" class="playlist__pic" style="display: block; visibility: visible;"><i
                      class="mod_cover__icon_play js_play" data-stat="y_new.playlist.pic_play"></i></a></div>
                <h4 class="playlist__title"><span class="playlist__title_txt"><a
                      href="https://y.qq.com/n/yqq/playsquare/3552291790.html#stat=y_new.playlist.dissname"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_playlist"
                      data-stat="y_new.playlist.dissname" :data-disstid="item.dissid"
                      :title="item.dissname">{{item.dissname}}</a></span></h4>
                <div class="playlist__author">

                  <a href="//y.qq.com/portal/profile.html?uin=owSqoKvFNK-5Nv**#stat=y_new.playlist.creater"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_user" data-uin="owSqoKvFNK-5Nv**"
                    data-stat="y_new.playlist.creater" :title="item.creator.name">{{item.creator.name}}</a>

                </div>
                <div class="playlist__other">
                  播放量： {{(item.listennum / 10000).toFixed(1)}}万
                </div>
                <a href="javascript:;" class="btn_operate_menu js_playlist_more" data-type="item.creator.type"
                  :data-id="item.dissid" data-stat="y_new.playlist.pic_mod_more"><span class="icon_txt">更多</span></a>
              </div>
            </li>

          </ul>
        </div>


        <div class="client_guide" id="limitButton">
          <p class="client_guide__txt">查看更多内容，请下载客户端</p><a href="javascript:;"
            class="client_guide__btn js_limitButton">立即下载</a>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        popup_tag1: false,
        typeListCategory: [],
        songList: [],
        selected: ''
      }
    },
    async asyncData({
      app
    }) {
      let typeListCategory = []
      let res = await app.$api.songListCategory()
      if (res.data.result === 100) {
        typeListCategory = res.data.data
        typeListCategory.shift()
      }

      let songList = []
      let result = await app.$api.songList()
      if (result.data.result === 100) {
        songList = result.data.data.list
      }

      return {
        typeListCategory,
        songList
      }
    },
    methods: {
      async changelist(index1, item, index) {
        this.selected = index1 + '' + index
        let songList = []
        let params = {
          category: item.id
        }
        let res = await this.$api.songList(params)
        if (res.data.result === 100) {
          this.songList = res.data.data.list
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/playlist.css";
  @import "~/assets/scss/layout.css";

</style>
