export default ({ app: { $request } }, inject) => {
  const apiList = {
    /**
     * 获取热搜词
     */
    getSearchHot () {
      return $request.get('/search/hot')
    }
  }
  inject('api', apiList)
}