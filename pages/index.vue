<template>
  <div class="container">
    <!-- 歌单推荐 -->
    <playlist-recommended :recommendDataList="recommendU"></playlist-recommended>
    <!-- 新歌首发 -->
    <newsong-debut :newSongs="newSongs"></newsong-debut>
    <!-- 精彩推荐 -->
    <!-- <wonderful-recommended></wonderful-recommended> -->
    <!-- 新碟首发 -->
    <!-- <newdisc-debut></newdisc-debut> -->
    <!-- 排行榜 -->
    <!-- <leader-board></leader-board> -->
    <!-- MV -->
    <!-- <mv></mv> -->
  </div>
</template>

<script>
// import PlaylistRecommended from '~/components/business/MusicTube'
export default {
  data () {
    return {
      recommendU: [],
      newSongs: []
    };
  },
  async asyncData ({ app, params, store }) {
    // 为你推荐
    let recommendU = []
    const result = await app.$api.recommendU()
    if (result.data.result === 100) {
      recommendU = result.data.data.list
    }
    // 新歌首发--最新
    let newSongs = []
    const nsResult = await app.$api.newSongs()
    if (nsResult.data.result === 100) {
      newSongs = nsResult.data.data.list
    }
    // 返回关联vue实例中定义的data
    return {
      recommendU: recommendU.slice(0, 10),
      newSongs: newSongs.slice(0, 63)
    }
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
