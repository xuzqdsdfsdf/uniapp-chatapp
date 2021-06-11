import $H from '@/common/free-lib/request.js'
import config from '@/common/free-lib/config.js'
import Chat from '@/common/free-lib/chat.js'
export default {
	state: {
		user: {},
		apply:{
			list:[],
			count:0
		},
		maillist:{
			list:[],
			indexlist:[]
		},
		chat:null,
		chatList:[],
		allnoreadnum:0,
		networkerr:false,
		mailGroupList:[]
	},
	getters:{
		
	},
	actions: {
		initGroupList({state},isfilter=false)
		{
			let list = state.maillist;
			list.list.forEach(v=>{
				v.list = v.list.filter(i=>{
					i = {...i,isselected:false}
					return isfilter ? i.user_id != isfilter.id : i
				})
			})
			state.mailGroupList=list
		},
		updateGroupList({state},selectlist)
		{
			let list = state.maillist;
			list.list.forEach(v=>{
				v.list = v.list.map(i=>{
					return {...i,
					isselected:selectlist.includes(i.user_id)}
				})
			})
			return state.mailGroupList = list
		},
		initRecommandChatList({state})
		{
			let list = state.chatList;
			list = list.map(v=>{
				return {...v,isselected:true}
			})
			state.chatList=list
		},
		// 清除已选择的状态
		clearGroupList({state,getters})
		{
			let list = state.maillist;
			list.list.forEach(v=>{
				v.list = v.list.map(i=>{
					return {...i,isselected:false}
				})
			})
			return getters.mailGroupList=list
		},
		//存到状态中
		// 存储到本地中
		userlogin({
			state,
			dispatch
		}, user) {
			uni.setStorageSync('token', user.token)
			uni.setStorageSync('user', JSON.stringify(user))
			uni.setStorageSync('user_id', user.id)
			
			state.user = user;
			dispatch('inituser')
		},
		// 退出登录处理
		userlogout({state}) {
			// 清楚本地登录状态
			state.user = {};
			state.maillist={
				list:[],
				indexlist:[]
			}
			uni.closeSocket({
				success:'关闭socket'
			})
			uni.removeStorageSync('token') 
			uni.removeStorageSync('user') 
			uni.removeStorageSync('user_id')
			// 关闭连接
			// 关闭socket
			state.chat.Close();
			// 跳转
			uni.reLaunch({
				url: '/pages/loginandresign/login'
			})
			
		},
		inituser({state,dispatch})
		{
			if(uni.getStorageSync('user'))
			{
				state.user=JSON.parse(uni.getStorageSync('user'))
				let token = uni.getStorageSync('token');
				// 初始化socket
				let chat = new Chat({url:config.socketurl});
				// 存储chat对象
				state.chat = chat
				// 初始化会话列表
				dispatch('getMailList')
				dispatch('initChatList')
				dispatch('getapplycount')
			}
		},
		getapplycount({state,dispatch},page=1)
		{
			$H.get(`/apply/${page}`).then(res=>{
				if(page===1)
				{
					 state.apply=res;
				}else 
				{
					state.apply.list=[...state.apply.list,...res.list]
				}
				dispatch('setbadge')
			}) 
		},
		setbadge({state})
		{
			let count = state.apply.count >99 ? '99+' :state.apply.count.toString()
			if(count>0)
			{
				return uni.setTabBarBadge({
					index:1,
					text:count
				})
			}
			uni.removeTabBarBadge({
				index:1
			})
			uni.$on('updateChatList',(list)=>{
				state.chatList = list
			})
		},
		getMailList({state})
		{
			$H.get('/friend/list').then(res=>{
				state.maillist.list=res.newList.length?res.newList:[],
				state.maillist.indexlist=res.indexList.length?res.indexList:[]
			})
		},
		initChatList({state})
		{
			if(state.chat)
			{
				state.chatList = state.chat.getChatList();
				uni.$on('updateChatList',(list)=>{
					state.chatList = list
				})
				uni.$on('updatenoreadnum',(num)=>{
					state.allnoreadnum = num
				}) 
				uni.$on('updateChatListItem',item=>{
					state.chatList = state.chat.getChatList();
				})
			}
		},
		updatenetwork({state},result)
		{
			state.networkerr=result
		},
		updateuserdetail({state},{v,k})
		{
			state.user[k] = v;
			let user = JSON.parse(uni.getStorageSync('user'))
			user[k] = v;
			uni.setStorageSync('user',JSON.stringify(user))
		},
	}
}
