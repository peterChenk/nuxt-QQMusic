<template>
  <div>
    <!-- 头部 -->
    <div class="main-content">
      <div class="toplist_nav">

        <dl class="toplist_nav__list"
            v-for="(item, index) in topCategory"
            :key="index">
          <dt class="toplist_nav__tit">{{item.title}}</dt>
          <dd class="toplist_nav__item"
              v-for="(item2, index2) in item.list"
              :key="index2">
            <a href="//y.qq.com/n/yqq/toplist/4.html#stat=y_new.toplist.menu.4"
               onclick="setStatCookie&amp;&amp;setStatCookie();"
               class="toplist_nav__link"
               :class="{'toplist_nav__link--current': false}">{{item2.label}}</a>
          </dd>
        </dl>

      </div>
      <div class="mod_toplist">
        <div class="toplist__hd">
          <h1 class="toplist__tit">热歌榜</h1>
          <span class="toplist_switch">
            <a href="javascript:;"
              class="toplist_switch__btn js_prev_week"
              style=""><i class="toplist_switch__arrow_prev sprite"></i><i class="icon_txt">上一期</i></a>
            <span class="toplist_switch__data js_chosed_week">7.31 - 8.6</span>
            <a href="javascript:;"
              class="toplist_switch__btn js_next_week toplist_switch__btn--disable"
              style=""><i class="toplist_switch__arrow_next sprite"></i><i class="icon_txt">下一期</i></a>
          </span>
          <a href="javascript:;"
            class="toplist__rule js_desc"
            data-left="-650"
            data-top="-78"
            data-target="popup_data_detail"
            data-stat="y_new.toplist.rule">榜单规则</a>
        </div>
        <div class="mod_songlist_toolbar">
          <a href="//y.qq.com/portal/player.html"
            class="mod_btn_green js_all_play"
            data-stat="y_new.toplist.playall"><i class="mod_btn_green__icon_play"></i>播放全部</a>
          <a href="javascript:;"
            class="mod_btn js_all_fav"
            data-stat="y_new.toplist.addall"><i class="mod_btn__icon_add"></i>添加到</a>
          <a href="javascript:;"
            class="mod_btn js_all_down"
            data-stat="y_new.toplist.downloadall"><i class="mod_btn__icon_down"></i>下载</a>
          <a href="javascript:;"
            class="mod_btn js_batch"
            data-stat="y_new.toplist.batch"><i class="mod_btn__icon_batch"></i>批量操作</a>
          <a class="mod_btn js_into_comment"
            data-stat="y_new.toplist.gotocomment"
            href="#comment_box"><i class="mod_btn__icon_comment"></i>评论(77575)</a>
        </div>

        <div class="mod_songlist">
          <ul class="songlist__header">
            <li class="songlist__edit sprite">
              <input type="checkbox"
                    class="songlist__checkbox js_check_all">
            </li>
            <li class="songlist__header_name">歌曲</li>
            <li class="songlist__header_author">歌手</li>
            <li class="songlist__header_time">时长</li>
          </ul>

          <ul class="songlist__list">
            <li :mid="item.songId" :ix="index" v-for="(item, index) in listDetail" :key="index">
              <div class="songlist__item"
                  onmouseover="this.className=(this.className+' songlist__item--hover')"
                  onmouseout="this.className=this.className.replace(/ songlist__item--hover/, '')">
                <div class="songlist__edit songlist__edit--check sprite">
                  <input type="checkbox"
                        class="songlist__checkbox">
                </div>

                <div class="songlist__number  songlist__number--top">{{item.rank}}</div>

                <div class="songlist__rank">
                  <i :class="{
                    'icon_rank_up': item.rankType === 1,
                    'icon_rank_down': item.rankType === 2,
                    'icon_rank_keep': item.rankType === 3,
                    'icon_rank_new': item.rankType === 4,
                    'icon_rank_popular': item.rankType === 6}"></i>
                  {{item.rankValue}}
                </div>

                <div class="songlist__songname">

                  <i class="songlist__icon songlist__icon_exclusive sprite"
                    v-if="item.isonly === 1"
                    title="独家"></i>

                  <span class="songlist__songname_txt"
                        style="visibility: visible;">
                    <a href="https://y.qq.com/n/yqq/album/004C9Kg7275J7H.html"
                      class="songlist__cover album_name"
                      :data-albummid="item.albumMid"
                      data-albumid="13226468"><img onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                          src="//y.gtimg.cn/music/photo_new/T002R90x90M000004C9Kg7275J7H.jpg?max_age=2592000"
                          data-original="//y.gtimg.cn/music/photo_new/T002R90x90M000004C9Kg7275J7H.jpg?max_age=2592000"
                          alt="飞鸟和蝉"
                          class="songlist__pic"
                          style="display: block; visibility: visible;"></a>
                    <a href="https://y.qq.com/n/yqq/song/004Fimy419PpsA.html"
                      class="js_song"
                      title="飞鸟和蝉 ">飞鸟和蝉</a>

                  </span>
                  <div class="mod_list_menu">
                    <a href="javascript:;"
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

                <div class="songlist__artist"
                    title="任然">

                  <a href="https://y.qq.com/n/yqq/singer/00067r4p0wBDDN.html"
                    data-singermid="00067r4p0wBDDN"
                    data-singerid="29858"
                    title="任然"
                    class="singer_name">任然</a>

                </div>
                <div class="songlist__time">04:56</div>
                <div class="songlist__other">

                </div>
              </div>
            </li>
          </ul>
          <div class="client_guide"
              id="limitButton">
            <p class="client_guide__txt">查看更多内容，请下载客户端</p><a href="javascript:;"
              class="client_guide__btn js_limitButton">立即下载</a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      topCategory: [],
      listDetail: []
    }
  },
  async asyncData ({ app }) {
    // 榜单类型
    let topCategory = []
    const res = await app.$api.topCategory()
    if (res.data.result === 100) {
      topCategory = res.data.data
    }
    // 榜单详情
    let listDetail = []
    const result = await app.$api.topDetail()
    if (result.data.result === 100) {
      listDetail = result.data.data.list
    }
    return {
      topCategory,
      listDetail
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/layout.css";
@import "~/assets/scss/toplist.css";
.main-content {
  padding-top: 60px;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
</style>