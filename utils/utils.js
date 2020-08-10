export default {
  /**
   * 时间戳转换
   * @param {number} timestamp - 10位时间戳
   */
  formatTime (timestamp) {
    let newDate = new Date()
    newDate.setTime(timestamp * 1000);
    // newDate.toISOString()
    return newDate.toJSON().substring(0, 10)
  },
  /**
   * 播放量格式化
   * @param {number} playcnt - 播放量
   */
  playVolume (playcnt) {
    return playcnt > 10000 ? (playcnt / 10000).toFixed(1) + '万' : playcnt
  }
}