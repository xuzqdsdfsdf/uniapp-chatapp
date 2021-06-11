import Vue from 'vue';
import Vuex from 'vuex';
import audio from '@/store/module/audio.js'
import user from '@/store/module/user.js'
Vue.use(Vuex)
//创建VueX对象
export default new Vuex.Store({
  modules:{
	  audio,
	  user
  }
})
