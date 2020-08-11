<template>
  <div>
    <!-- 头部 -->
    <div class="mod_singer_push js_my_singers_nologin mod_singer_push--nofocus">
      <div class="section_inner">
        <h2 class="singer_push__tit"><i class="icon_txt">万千歌手，尽在眼前</i></h2>
        <div class="singer_push__desc"><i class="icon_txt">登录查看你关注的歌手</i></div>
        <a class="singer_push__btn js_login" href="javascript:;" data-stat="y_new.singerlist.header.login"
          style="display: none;">立即登录<span class="singer_push__btn_border"></span></a>
      </div>
    </div>
    <!-- 关注的歌手 -->
    <div class="mod_singer_push mod_slide_box js_my_singers" style="display:none;">
      <div class="section_inner">
        <div class="singer_push_tab">
          <span href="javascript:;" class="singer_push_tab__item singer_push_tab__item--on">我关注的歌手</span>
          <!--a href="javascript:;" class="singer_push_tab__item">我常听的歌手</a-->
        </div>
        <div class="mod_slide singer_push_slide">
          <a href="javascript:;" class="slider__prev js_jump" data-stat="y_new.singerlist.header.pager" data-p="prev"><i
              class="icon_txt">上一页</i></a>
          <a href="javascript:;" class="slider__next js_jump" data-stat="y_new.singerlist.header.pager" data-p="next"><i
              class="icon_txt">下一页</i></a>
          <ul class="singer_push_list slide__list">
          </ul>
        </div>
        <div class="mod_slide_switch js_switch" data-stat="y_new.singerlist.header.pager">
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="mod_singer_tag" id="tag_box">
        <div class="singer_tag__list js_index">

          <a href="javascript:;" class="singer_tag__item" @click="selectByIndex(item, index)"
            :class="{'singer_tag__item--all': index === 0,'singer_tag__item--select': selectIndex === index}"
            v-for="(item, index) in letterList" data-key="index" :data-id="item.id" hidefocus="">{{item.name}}</a>

        </div>

        <div class="singer_tag__list js_area">
          <a href="javascript:;" v-for="(item, index) in area" class="singer_tag__item" data-key="area"
            @click="selectAreaByIndex(item, index)"
            :class="{'singer_tag__item--all': index === 0,'singer_tag__item--select': areaSelectIndex === index}"
            :data-id="item.id" hidefocus="">
            {{item.name}}
          </a>

        </div>

        <div class="singer_tag__list js_sex">

          <a href="javascript:;" v-for="(item, index) in sex" class="singer_tag__item" data-key="sex"
            @click="selectSexByIndex(item, index)"
            :class="{'singer_tag__item--all': index === 0,'singer_tag__item--select': sexSelectIndex === index}"
            :data-id="item.id" hidefocus="">
            {{item.name}}
          </a>

        </div>

        <div class="singer_tag__list js_genre">
          <a href="javascript:;" v-for="(item, index) in genre" class="singer_tag__item" data-key="genre"
            @click="selectGenreByIndex(item, index)"
            :class="{'singer_tag__item--all': index === 0,'singer_tag__item--select': genreSelectIndex === index}"
            :data-id="item.id" hidefocus="">
            {{item.name}}
          </a>

        </div>

      </div>
      <div id="mod-singerlist">

        <div class="mod_singer_list">
          <ul class="singer_list__list js_avtar_list">

            <li class="singer_list__item" v-for="(item, index) in singerList" :key="index">
              <div class="singer_list__item_box">
                <nuxt-link :to="'/singerDetail/' + item.singer_mid"
                  onclick="setStatCookie&amp;&amp;setStatCookie();" class="singer_list__cover js_singer"
                  hidefocus="true" data-stat="y_new.singerlist.singerpic" :data-singermid="item.singer_mid"
                  :data-singerid="item.singer_id" :title="item.singer_name">
                  <img class="singer_list__pic"
                    onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=2592000';this.onerror=null;"
                    :src="item.singer_pic" :alt="item.singer_name">
                </nuxt-link>
                <h3 class="singer_list__title"><nuxt-link
                    :to="'/singerDetail/' + item.singer_mid"
                    onclick="setStatCookie&amp;&amp;setStatCookie();" :data-singermid="item.singer_mid"
                    :data-id="item.singer_id" class="js_singer" data-stat="y_new.singerlist.singername"
                    :title="item.singer_name">{{item.singer_name}}</nuxt-link></h3>
              </div>
            </li>
          </ul>
        </div>

        <ul class="singer_list_txt">

          <li class="singer_list_txt__item" v-for="(item, index) in singerListText" :key="index">
            <a href="https://y.qq.com/n/yqq/singer/002raUWw3PXdkT.html#stat=y_new.singerlist.singername"
              onclick="setStatCookie&amp;&amp;setStatCookie();" class="singer_list_txt__link js_singer"
              data-stat="y_new.singerlist.singername" data-singermid="item.singer_mid" :data-singerid="item.singer_id"
              :title="item.singer_name">{{item.singer_name}}</a></li>
        </ul>

        <div class="mod_page_nav js_pager"><strong class="current">1</strong><a href="javascript:;" class="js_pageindex"
            data-index="2" hidefocus="">2</a><a href="javascript:;" class="js_pageindex" data-index="3"
            hidefocus="">3</a><a href="javascript:;" class="js_pageindex" data-index="4" hidefocus="">4</a><strong
            class="more">...</strong><a href="javascript:;" class="js_pageindex" data-index="299" hidefocus="">299</a><a
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
        selectIndex: 0,
        areaSelectIndex: 0,
        sexSelectIndex: 0,
        genreSelectIndex: 0,
        letterList: [],
        area: [],
        sex: [],
        genre: [],
        singerList: [],
        singerListText: []
      }
    },
    async asyncData({
      app,
      params,
      store
    }) {
      // 歌手分类
      let letterList = []
      let area = []
      let sex = []
      let genre = []
      const result = await app.$api.singerCategory()
      if (result.data.result === 100) {
        letterList = result.data.data.index
        area = result.data.data.area
        sex = result.data.data.sex
        genre = result.data.data.genre
      }
      // 歌手列表
      let singerList = []
      let singerListText = []
      const scResult = await app.$api.singerList()
      if (scResult.data.result === 100) {
        singerList = scResult.data.data.list
        singerListText = scResult.data.data.list
      }
      return {
        letterList,
        area,
        sex,
        genre,
        singerList: singerList.slice(0, 10),
        singerListText: singerListText.slice(10)
      }
    },
    methods: {
      selectByIndex(item, index) {
        this.selectIndex = index
        this.indexId = item.id
        this.getSingerList()
      },
      selectAreaByIndex(item, index) {
        this.areaSelectIndex = index
        this.areaId = item.id
        this.getSingerList()
      },
      selectSexByIndex(item, index) {
        this.sexSelectIndex = index
        this.sexId = item.id
        this.getSingerList()
      },
      selectGenreByIndex(item, index) {
        this.genreSelectIndex = index
        this.genreId = item.id
        this.getSingerList()
      },
      async getSingerList() {
        let option = {
          index: this.indexId,
          area: this.areaId,
          sex: this.sexId,
          genre: this.genreId
        }
        let singerList = []
        let singerListText = []
        let result = await this.$api.singerList(option)
        if (result.data.result === 100) {
          singerList = result.data.data.list
          singerListText = result.data.data.list
          this.singerList = singerList.slice(0, 10)
          this.singerListText = singerListText.slice(10)
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/singer.css";

  .main-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

</style>
