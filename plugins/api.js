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
     */
    recommendByType(id) {
      return $request.get('/recommend/playlist', {
        id: id
      })
    },
    /**
     * 新歌首发
     */
    newSongs(type) {
      return $request.get('/new/songs', {
        type: type
      })
    }
  }
  inject('api', apiList)
}
