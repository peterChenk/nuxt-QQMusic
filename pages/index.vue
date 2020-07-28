<template>
  <div class="container">
    <!-- 歌单推荐 -->
    <playlist-recommended></playlist-recommended>
    <!-- 新歌首发 -->
    <newsong-debut></newsong-debut>
    <!-- 精彩推荐 -->
    <wonderful-recommended></wonderful-recommended>
    <!-- 新碟首发 -->
    <newdisc-debut></newdisc-debut>
    <!-- 排行榜 -->
    <leader-board></leader-board>
    <!-- MV -->
    <mv></mv>
  </div>
</template>

<script>
// import PlaylistRecommended from '~/components/business/MusicTube'
export default {
  data () {
    return {

    };
  },
  methods: {
    switchRcomd (item) {
      this.active = index;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/index.css";
@import "~/assets/scss/layout.css";
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
