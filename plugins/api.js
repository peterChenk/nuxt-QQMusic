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
     * mv分类 
     */
    MVcategory() {
      return $request.get('/mv/category')
    },
    /**
     * MV
     * @param {string} type 类型
     */
    newMV(type = 0) {
      return $request.get('/new/mv', {
        type: type
      })
    },
    /**
     * 歌手分类
     */
    singerCategory() {
      return $request.get('/singer/category')
    },
    /**
     * 根据分类获取歌手列表
     * @param {number} area 地区，默认 -100
     * @param {number} genre 风格，默认 -100
     * @param {number} index 首字母，默认 -100
     * @param {number} sex 性别/组合，默认 -100
     * @param {number} pageNo 默认 1
     */
    singerList({
      area = -100,
      genre = -100,
      index = -100,
      sex = -100,
      pageNo = 1
    } = {}) {
      return $request.get('/singer/list', {
        area: area,
        genre: genre,
        index: index,
        sex: sex,
        pageNo: pageNo
      })
    },
    /**
     * MV列表
     * @param {number} pageNo 默认 1
     * @param {number} pageSize: 默认 20
     * @param {number} area 地区，默认 15 全部
     * @param {number} version MV 类型，默认 7 全部
     */
    MVList(params = {}) {
      return $request.get('/mv/list', params)
    },
  }
  inject('api', apiList)
}
