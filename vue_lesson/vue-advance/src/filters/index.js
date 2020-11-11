import Vue from 'vue'
import moment from 'moment'
Vue.filter('formatTime', function (value) {
    if (!value) return ''
    return moment(value).format('MM.DD HH:mm')
})
