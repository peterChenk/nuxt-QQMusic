<template>
  <div>
    <!-- 头部 -->
    <div class="mod_loading" id="before_page" style="display: none;"><i class="icon_txt">加载中</i></div>
    <div class="main-content">
      <!-- 标签筛选 -->
      <div class="mod_tag" id="mv_tags">
        <div class="tag__list js_tags_area">
          <h3 class="tag__tit">区域</h3>

          <a href="javascript:;" v-for="(item, index) in typeList.area" @click="areaSelect(item, index)"
            :class="{'tag__item--select': areaSelected === index}" :data-id="item.id" data-sort="area" hidefocus=""
            class="tag__item">{{item.name}}</a>

        </div>

        <div class="tag__list js_tags_version">
          <h3 class="tag__tit">版本</h3>

          <a href="javascript:;" v-for="(item, index) in typeList.version" :data-id="item.id"
            @click="versionSelect(item, index)" :class="{'tag__item--select': versionSelected === index}"
            data-sort="version" class="tag__item">{{item.name}}</a>

        </div>
      </div>

      <div class="mod_part_detail">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit js_lib_title">全部MV</h2>
          <div class="part_switch" aria-label="排列方式">
            <a href="javascript:;" class="part_switch__item part_switch__item--left part_switch__item--select" order="1"
              data-sort="1">最新</a>
            <a href="javascript:;" class="part_switch__item part_switch__item--right" data-sort="0" order="1">最热</a>
          </div>
        </div>
        <div class="mod_mv">
          <ul class="mv_list__list" id="mv_list">
            <li class="mv_list__item" v-for="(item, index) in MVList" :data-vid="item.vid" :key="index">
              <div class="mv_list__item_box" style="visibility: visible;">
                <a href="https://y.qq.com/n/yqq/mv/v/r0033wmeu4q.html#stat=y_new.mv_lib.mv_play"
                  onclick="setStatCookie&amp;&amp;setStatCookie();" class="mv_list__cover mod_cover js_mv"
                  data-stat="y_new.mv_lib.mv_play" :data-vid="item.vid" :title="item.title" hidefocus="true">
                  <img class="mv_list__pic" :src="item.picurl"
                    data-original="//y.gtimg.cn/music/photo_new/T015R640x360M000001YiOK42r9CAv.jpg?max_age=2592000"
                    onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                    :alt="item.title" style="display: block; visibility: visible;">
                  <i class="mod_cover__icon_play"></i>
                </a>
                <h3 class="mv_list__title"><a
                    href="https://y.qq.com/n/yqq/mv/v/r0033wmeu4q.html#stat=y_new.mv_lib.mv_name"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_mv" data-stat="y_new.mv_lib.mv_name"
                    :data-vid="item.vid" :title="item.title">{{item.title}}</a></h3>

                <div class="mv_list__singer" :title="item.singers.name">
                  <a href="https://y.qq.com/n/yqq/singer/003TRNbd3cJYeN.html#stat=y_new.mv_lib.mv_singername"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" class="js_singer"
                    data-stat="y_new.mv_lib.mv_singername" :data-singermid="item.singers.mid" :title="item.singers.name">
                    {{item.singers[0].name}}</a>
                </div>

                <div class="mv_list__info"><span class="mv_list__listen"><i
                      class="mv_list__listen_icon sprite"></i>{{item.playcnt | playVolume}}</span>{{item.pubdate | formatTime}}</div>

              </div>
            </li>
          </ul>
        </div>
        <div class="mod_page_nav js_pager"><strong class="current">1</strong><a href="javascript:;" class="js_pageindex"
            data-index="2" hidefocus="">2</a><a href="javascript:;" class="js_pageindex" data-index="3"
            hidefocus="">3</a><a href="javascript:;" class="js_pageindex" data-index="4" hidefocus="">4</a><strong
            class="more">...</strong><a href="javascript:;" class="js_pageindex" data-index="50" hidefocus="">50</a><a
            href="javascript:;" class="next js_pageindex" data-index="2" title="下一页" hidefocus=""><span>&gt;</span></a>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        areaSelected: 0,
        versionSelected: 0,
        typeList: {},
        MVList: []
      }
    },
    async asyncData({
      app
    }) {
      // 分类
      let typeList = []
      let res = await app.$api.MVcategory()
      if (res.data.result === 100) {
        typeList = res.data.data
      }
      // 列表
      let MVList = []
      let result = await app.$api.MVList()
      if (result.data.reuslt === 100) {
        MVList = result.data.data.list
      }

      return {
        typeList,
        MVList
      }
    },
    methods: {
      areaSelect(item, index) {
        this.areaSelected = index
        const params = {
          area: item.id
        }
        this.getMVList(params)
      },
      versionSelect(item, index) {
        this.versionSelected = index
        const params = {
          version: item.id
        }
        this.getMVList(params)
      },
      async getMVList(params) {
        let MVList = []
        let res = await this.$api.MVList(params)
        if (res.data.reuslt === 100) {
          this.MVList = res.data.data.list
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/mv.css";

  .mv_list__list {
    width: 100%;
  }

  .mv_list__item_box {
    width: auto;
  }

</style>
