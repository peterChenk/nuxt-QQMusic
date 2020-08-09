<template>
  <div class="main">
    <mod-header></mod-header>
    <Nuxt />
    <main-footer></main-footer>

    <a href="javascript:;" class="btn_bottom_top sprite_before js_btn_top" style="display: block;"
      @click="goToTop()"><span class="icon_txt">返回顶部</span></a>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goToTop() {
        // 页面滚动到顶部
        // 方法一
        // document.body.scrollTop = document.documentElement.scrollTop = 0
        // 方法二
        document.body.scrollIntoView()
      }
    }
  }

</script>
<style>
  .main {
    width: 100%;
    height: 100%;
    min-width: 1024px !important;
    /* 设置成和body一样的最小宽度 */
    background-size: 100% 100%;
  }

</style>
<style>
  .btn_bottom_top {
    bottom: 124px;
  }

  .btn_bottom_top {
    position: fixed;
    right: 40px;
    width: 38px;
    height: 38px;
    z-index: 4;
    background-color: #fff;
    border: 1px solid #c9c9c9;
  }

  .btn_bottom_top:before {
    content: "";
    display: block;
    width: 18px;
    height: 10px;
    margin: 14px 10px;
    background-position: -160px 0;
  }

  .sprite,
  .sprite_before:before {
    background-image: url(../assets/img/icon_sprite.png?max_age=2592000&v=85678e8f28c7b4bcad5c209b21b7e3);
    /* background-image: -webkit-image-set(url(img/icon_sprite.png?max_age=2592000&v=85678e8…&v=85678e8…) 1x, url(img/icon_sprite@2x.png?max_age=2592000&v=85678e8…&v=85678e8…&v=ce93ff1…) 2x); */
  }

</style>
