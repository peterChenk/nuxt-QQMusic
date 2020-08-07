<template>
  <div class="container">
    <!-- 歌单推荐 -->
    <playlist-recommended :recommendDataList="recommendU"></playlist-recommended>
    <!-- 新歌首发 -->
    <newsong-debut :newSongs="newSongs"></newsong-debut>
    <!-- 精彩推荐 -->
    <wonderful-recommended :wonderfulRecommend="wonderfulRecommend"></wonderful-recommended>
    <!-- 新碟首发 -->
    <newdisc-debut :newDiscArr="newDisc"></newdisc-debut>
    <!-- 排行榜 -->
    <leader-board :rankingList="rankingList"></leader-board>
    <!-- MV -->
    <mv :MVList="MVList"></mv>
  </div>
</template>

<script>
  // import PlaylistRecommended from '~/components/business/MusicTube'
  export default {
    data() {
      return {
        recommendU: [],
        newSongs: [],
        wonderfulRecommend: [],
        newDisc: [],
        rankingList: [],
        MVList: []
      };
    },
    async asyncData({
      app,
      params,
      store
    }) {
      // 为你推荐
      let recommendU = []
      // const result = await app.$api.recommendU()
      // if (result.data.result === 100) {
      //   recommendU = result.data.data.list
      // }
      // 新歌首发--最新
      let newSongs = []
      // const nsResult = await app.$api.newSongs()
      // if (nsResult.data.result === 100) {
      //   newSongs = nsResult.data.data.list
      // }
      // 精彩推荐
      let wonderfulRecommend = []
      // const wfResult = await app.$api.wonderfulRecommend()
      // if (wfResult.data.result === 100) {
      //   wonderfulRecommend = wfResult.data.data
      // }
      // 新碟首发
      let newDisc = []
      // const ndResult = await app.$api.newDisc()
      // if (ndResult.data.result === 100) {
      //   newDisc = ndResult.data.data.list
      // }
      // 排行榜
      let rankingList = []
      // const rlResult = await app.$api.rankingList()
      // if (rlResult.data.result === 100) {
      //   rankingList = rlResult.data.data[0].list
      // }
      // MV
      let MVList = []
      const mvResult = await app.$api.newMV()
      if (mvResult.data.resultL === 100) {
        MVList = mvResult.data.data.list
      }
      // 返回关联vue实例中定义的data
      return {
        recommendU: recommendU.slice(0, 10),
        newSongs: newSongs.slice(0, 63),
        wonderfulRecommend,
        newDisc: newDisc,
        rankingList: rankingList.slice(0, 5),
        MVList: MVList.slice(0, 20)
      }
    },
    methods: {
      switchRcomd(item) {
        this.active = index;
      }
    }
  };

</script>

<style lang="scss" scoped>
  @import "~/assets/scss/index.css";
  @import "~/assets/scss/layout.css";

  .container {
    margin: 0 auto;
    min-height: 100vh;
  }

</style>
