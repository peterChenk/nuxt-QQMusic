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
    /**
     * 排行榜 分类
     */
    topCategory(showDetail = 0) {
      return $request.get('/top/category', {
        showDetail: showDetail
      })
    },
    /**
     * 排行榜榜单详情
     */
    topDetail(params = {
      id: 4,
      pageSize: 20
    }) {
      return $request.get('/top', params)
    },
    /**
     * 获取歌单分类
     */
    songListCategory() {
      return $request.get('/songlist/category')
    },
    /**
     * 根据分类获取歌单
     * @param {number} pageNo 默认 1
     * @param {number} pageSize: 默认 20
     * @param {number} sort // 5: 推荐，2: 最新，其他数字的排列值最后都会返回推荐
     * @param {number} category 分类 id，默认 10000000 （全部），其他值从上面的分类接口获取
     */
    songPlayList(params) {
      return $request.get('/songlist/list', params)
    },
    /**
     * 电台分类
     */
    radioCategory() {
      return $request.get('/radio/category')
    },
    /**
     * 获取歌单详情
     * @param {number} id 歌单id 必填
     */
    songList(id) {
      return $request.get('/songlist', {
        id: id
      })
    },
    /**
     * 获取歌曲详情
     * @param {number} id 歌曲id 必填
     */
    songDetail(id) {
      return $request.get('/song', {
        songmid: id
      })
    },
    /**
     * 歌词
     * @param {number} id 歌曲id 必填
     */
    lyric(id) {
      return $request.get('/lyric', {
        songmid: id
      })
    },
    /**
     * 相关歌单
     * @param {number} id 歌曲id 必填
     */
    songPlaylist(songid) {
      return $request.get('/song/playlist', {
        id: songid
      })
    },
    /**
     * 相关MV
     * @param {number} id 歌曲id 必填
     */
    songMV(songid) {
      return $request.get('/song/mv', {
        id: songid
      })
    },
    /**
     * 歌手介绍
     * @param {number} singermid 歌手id 必填
     */
    singerDesc(id) {
      return $request.get('/singer/desc', {
        singermid: id
      })
    },
    /**
     * 获取热门歌曲
     * @param {number} singermid 歌手id 必填
     * @param {number} num 返回歌曲数量
     */
    singerSongs(id, num = 10) {
      return $request.get('/singer/songs', {
        singermid: id
      })
    },
    /**
     * 获取歌手专辑
     * @param {number} singermid 歌手id 必填
     * @param {number} pageNo 默认 1
     * @param {number} pageSize 默认 20
     */
    singerAlbum(id, pageSize = 5) {
      return $request.get('/singer/album', {
        singermid: id,
        pageSize: pageSize
      })
    },
    /**
     * 获取歌手MV
     * @param {number} singermid 歌手id 必填
     * @param {number} pageNo 默认 1
     * @param {number} pageSize 默认 20
     */
    singerMV(id, pageSize = 5) {
      return $request.get('/singer/mv', {
        singermid: id,
        pageSize: pageSize
      })
    },
    /**
     * 相似歌手
     * @param {number} singermid 歌手id 必填
     */
    singerSim(id) {
      return $request.get('/singer/sim', {
        singermid: id
      })
    },
    /**
     * 获取专辑信息
     * @param {number} albummid 专辑id 必填
     */
    album(id) {
      return $request.get('/album', {
        albummid: id
      })
    },
    /**
     * 获取专辑内的歌曲
     * @param {number} albummid 专辑id 必填
     */
    albumSongs(id) {
      return $request.get('/album/songs', {
        albummid: id
      })
    },
    /**
     * 获取mv信息
     * @param {number} vid 视频的 vid 必填
     */
    mvInfo(vid) {
      return $request.get('/mv', {
        id: vid
      })
    },
    /**
     * 获取 MV 播放链接
     * @param {number} vid 视频的 vid 必填
     */
    mvUrl(vid) {
      return $request.get('/mv/url', {
        id: vid
      })
    },
    /**
     * 获取 歌曲 播放链接
     * @param {number} songmid 歌曲的 songmid 必填
     */
    songUrl(vid) {
      return $request.get('/song/urls', {
        id: vid
      })
    },
  }
  inject('api', apiList)
}
