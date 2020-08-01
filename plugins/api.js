export default ({
  app: {
    $request
  }
}, inject) => {
  const apiList = {
    /**
     * 获取热搜词
     */
    getSearchHot() {
      return $request.get('/search/hot')
    },
    /**
     * 为你推荐
     */
    recommendU() {
      return $request.get('/recommend/playlist/u')
    },
    /**
     * 按分类推荐歌单
     * @param {number} id 类型
     */
    recommendByType(id) {
      return $request.get('/recommend/playlist', {
        id: id
      })
    },
    /**
     * 新歌首发
     * @param {string} type 类型
     */
    newSongs(type) {
      return $request.get('/new/songs', {
        type: type
      })
    },
    /**
     * 精彩推荐
     */
    wonderfulRecommend() {
      return $request.get('/recommend/banner')
    },
    /**
     * 新碟首发
     * @param {string} type 类型
     * @param {number} num 条数
     */
    newDisc(type, num = 20) {
      return $request.get('/new/album', {
        type: type,
        num: num
      })
    },
    /**
     * 排行榜
     * @param {number} showDetail 是否显示前三歌曲简单信息和榜单介绍，0，不显示，1 显示
     */
    rankingList(showDetail = 1) {
      return $request.get('/top/category', {
        showDetail: showDetail
      })
    },
    /**
     * MV
     * @param {string} type 类型
     */
    newMV(type = 0) {
      return $request.get('/new/mv', {
        type: type
      })
    }
  }
  inject('api', apiList)
}
