<template>
  <div>
    <div class="main-content">

      <div class="mod_radio_sidebar" id="taglist" style="top: 35px;">


        <a href="javascript:;" class="radio_sidebar__item radio_sidebar__item--current" data-id="24"
          data-index="0">热门</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="68" data-index="1">上午</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="7" data-index="2">心情</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="56" data-index="3">主题</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="55" data-index="4">场景</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="6" data-index="5">曲风</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="4" data-index="6">语言</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="59" data-index="7">人群</a>

        <a href="javascript:;" class="radio_sidebar__item" data-id="22" data-index="8">乐器</a>
      </div>
      <div class="mod_radio">

        <div class="radio__item" v-for="(item, index) in radioList" :key="index">
          <h2 class="radio__tit">{{item.title}}</h2>
          <div class="mod_radio_list">
            <ul class="radio_list__list">

              <li class="radio_list__item" :data-id="item2.id" data-name="item2.title" data-pos="1" data-cid=""
                v-for="(item2, index2) in item.list"
                data-json="{&quot;Fnew&quot;:&quot;0&quot;,&quot;Fonly&quot;:&quot;0&quot;,&quot;listenNum&quot;:&quot;19337600&quot;,&quot;radioFphoto1&quot;:&quot;1&quot;,&quot;radioFphoto2&quot;:&quot;2&quot;,&quot;radioId&quot;:&quot;99&quot;,&quot;radioImg&quot;:&quot;https://y.gtimg.cn/music/common/upload/t_musichall_pic/363459.jpg&quot;,&quot;radioName&quot;:&quot;个性电台&quot;}">
                <div class="radio_list__item_box">
                  <div class="radio_list__cover mod_cover" style="visibility: visible;"><a href="javascript:;"
                      class="js_radio"><img
                        data-original="//y.gtimg.cn/music/common/upload/t_musichall_pic/363459.jpg?max_age=2592000"
                        :alt="item2.title" :src="item2.pic_url"
                        onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                        class="radio_list__pic" style="display: block; visibility: visible;"><i
                        class="mod_cover__mask"></i><i class="mod_cover__icon_play"></i></a></div>
                  <h4 class="radio_list__title"><span class="radio_list__title_txt"><a href="javascript:;"
                        class="js_radio" :title="item2.title">{{item2.title}}</a></span></h4>
                  <div class="radio_list__other">
                    播放量：{{(item2.listenNum / 10000).toFixed(1)}}万
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radioList: []
      }
    },
    async asyncData({
      app
    }) {
      let radioList = []
      let res = await app.$api.radioCategory()
      if (res.data.result === 100) {
        radioList = res.data.data
      }
      return {
        radioList
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "~/assets/scss/radio.css"

</style>
