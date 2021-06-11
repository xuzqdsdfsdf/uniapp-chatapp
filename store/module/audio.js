export default {
	state:{
		eventList:[]
	},
	mutations:{
		// 注册全局事件
		registerevent(state,event)
		{ 
			state.eventList.push(event)
		},
		// 执行全局事件
		doevent(state,event)
		{
			state.eventList.forEach(v=>{
				v(event)
			})
		},
		offevent(state,event)
		{
			let index=state.eventList.filter(v=>v===event);
			if(index!==-1)
			{
				state.eventList.splice(index,1);
			}
		}
	},
	actions:{
		// 分发全局事件
		$audioon({commit},event)
		{
			commit('registerevent',event)
		},
		// 执行全局事件
		$audioemit({commit},e)
		{
			commit('doevent',e)
		},
		$audiooff({commit},e)
		{
			commit('offevent',e)
		}
	}
}