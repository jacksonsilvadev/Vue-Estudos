import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-axios-5475a.firebaseio.com/'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://vue-axios-5475a.firebaseio.com/'
        })
    }
})