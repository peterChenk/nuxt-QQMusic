import Vue from 'vue'
import utils from '~/utils/utils'

Vue.filter('formatTime', d => utils.formatTime(d))
Vue.filter('playVolume', d => utils.playVolume(d))

export default function (context, inject) {
  inject('utils', utils)
}