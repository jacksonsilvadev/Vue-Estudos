import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './plugins/axios'


Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')