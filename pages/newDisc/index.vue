<template>
  <div>
    <!-- 头部 -->
    <div class="mod_loading" id="before_page" style="display: none;"><i class="icon_txt">加载中</i></div>
    <div class="main-content">
      <!-- 标签筛选 -->
      <div class="mod_tag" id="tag_list">
        <div class="tag__list">

          <a href="javascript:;" v-for="(item, index) in typeList" @click="switchRcomd(item, index)"
            :class="{'tag__item--select': active === index}" class="tag__item " :data-id="'area|' + item.type">
            {{item.name}}
          </a>

        </div>
      </div>

      <div class="mod_part_detail">
        <div class="mod_playlist mod_playlist--all">
          <ul class="playlist__list" id="album_list">
            <li class="playlist__item" v-for="(item, index) in newDiscList" :data-albummid="item.mid"
              onmouseover="this.className=(this.className+' playlist__item--hover')"
              onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')">
              <div class="playlist__item_box">
                <div class="playlist__cover mod_cover" style="visibility: visible;">
                  <a href="https://y.qq.com/n/yqq/album/002JsOLO0kixXt.html#stat=y_new.album_lib.album_pic"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album"
                    data-stat="y_new.album_lib.album_pic" :data-albummid="item.mid">
                    <img :src="imgSrc(item)"
                      data-original="//y.gtimg.cn/music/photo_new/T002R300x300M000002JsOLO0kixXt_2.jpg?max_age=2592000"
                      onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                      :alt="item.name" class="playlist__pic" style="display: block; visibility: visible;">
                    <i class="mod_cover__icon_play js_play" data-stat="y_new.album_lib.album_play"></i>
                  </a>
                </div>
                <h4 class="playlist__title">
                  <span class="playlist__title_txt">
                    <a href="https://y.qq.com/n/yqq/album/002JsOLO0kixXt.html#stat=y_new.album_lib.album_name"
                      onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_album"
                      data-stat="y_new.album_lib.album_name" :data-albummid="item.mid" :title="item.name">{{item.name}}
                    </a>
                  </span>
                </h4>

                <div class="playlist__author" :title="item.singers.name">
                  <a href="https://y.qq.com/n/yqq/singer/002XGxqI4HDz31.html" class="js_singer"
                    :data-singermid="item.singers.mid">{{item.singers[0].name}}</a>
                </div>
                <div class="playlist__other">
                  {{item.release_time}}
                </div>
                <a href="javascript:;" class="btn_operate_menu js_albumlist_more" data-type="2" :data-mid="item.mid"
                  data-stat="y_new.album_lib.more">
                  <span class="icon_txt">更多</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="mod_page_nav js_pager"><strong class="current">1</strong><a href="javascript:;" class="js_pageindex"
            data-index="2" hidefocus="">2</a><a href="javascript:;" class="js_pageindex" data-index="3"
            hidefocus="">3</a><a href="javascript:;" class="js_pageindex" data-index="4" hidefocus="">4</a><strong
            class="more">...</strong><a href="javascript:;" class="js_pageindex" data-index="1141"
            hidefocus="">1141</a><a href="javascript:;" class="next js_pageindex" data-index="2" title="下一页"
            hidefocus=""><span>&gt;</span></a></div>
      </div>


    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        newDiscList: []
      }
    },
    created() {
      this.switchRcomd({
        type: '1'
      }, 0)
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
  @import "~/assets/scss/album.css";

</style>
