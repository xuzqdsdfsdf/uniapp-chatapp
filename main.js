import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false
// Vue.component.use(freeDivider)
Vue.prototype.$store=store
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
 