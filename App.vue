<script>
	import {
		mapActions,
		mapState
	} from 'vuex'
	export default {
		onLaunch: function() {
			this.$store.dispatch('inituser')
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('http://at.alicdn.com/t/font_2320120_y3yl66kmjx.ttf')"
			});
		},
		onShow: function() {
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './common/free.css';
	@import './common/common.css';
</style>
