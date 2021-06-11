import formatdate from '../free-lib/time.js'
import {mapState} from 'vuex'
export default{
	data()
	{
		return {
		}
	},
	computed:
	{
		...mapState({
			chat:state=>state.user.chat
		})
	}, 
	onShow()
	{
		
	},
	onLoad()
	{
		// 初始化网络
		// uni.$on('networkerr',(result)=>{
		// 	this.$dispatch('updatenetwork')
		// })
	},
	watch: {
		
	},
	methods: {
		
	},
	filters:{
		
	},
	 
}