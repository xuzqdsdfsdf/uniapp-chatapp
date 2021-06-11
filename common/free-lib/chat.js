import $H from './request.js'
import $store from '@/store/index.js'
class Chat {
	constructor(arg) {
		const self = this;
		this.url = arg.url; //socket地址
		this.isonline = false; //是否在线
		this.socket = null; //socket对象
		this.TO = false;
		let user = uni.getStorageSync('user') //获取用户对象
		// 初始化背景音乐
		this.bgAudioMannager = uni.getBackgroundAudioManager();
		this.user = user ? JSON.parse(user) : {},
			// 创建聊天对象
			this.createObject = (detail) => {
				this.TO = detail ? detail : {};
			}
		// 摧毁聊天对象 
		this.destroyObject = () => {
			this.TO = false;
			console.log('摧毁聊天对象');
		}
		// 连接监听
		// 用户是否存在
		if (this.user.token) {
			this.connectSocket();
		}
		// 发送消息的方法
		this.send = (message,isresend,k,onprogress=false) => {
			return new Promise(async(resol, rej) => {
				// 组织聊天信息
				// 添加历史记录
				// k可以理解为该条消息在本地中的id
				if(!isresend)
				{
				  let msg = this.addChatDetail(message)
				  k = msg.k
				  this.updateChatList(message)
				}
				// 更新会话列表，是指首页的会话
				// 是否上线
				if (!this.checkOnline()) {
					message.sendStatus='fail'
					this.updateChatDetail(message,k)
					return rej('socket未连接')
				}
				let isupload = (message.type !=='text' && message.type !=='emoticon' && !message.data.startsWith('http') && message.type !=='card')
				let result = ''
				if(isupload)
				{
					let res = await $H.uploadfiles(message.data,onprogress);
					let dataurl = JSON.parse(res.data)
					result = dataurl.data
					switch(message.type) 
					{
						case 'video':
						message.options = message.type == 'video' ? { poster:`${result}?x-oss-process=video/snapshot,t_10,m_fast,w_300,f_png` }:{} 
						break;
					}
				}
				$H.post('/chat/send', {
					to_id: message.to_id||this.TO.id,
					chat_type: message.chat_type||this.TO.chat_type,
					type: message.type,
					data: isupload ? result :message.data,
					options:JSON.stringify(message.options)
				}).then(res => {
					// 发送成功
					res = JSON.parse(res); 
					message.id = res.id;
					message.sendStatus = 'success'
					// 更新指定历史记录
					this.updateChatDetail(message, k)
					resol(res)
				}).catch((err) => {
					// 发送失败
					message.sendStatus = 'fail'
					// 更新指定历史记录
					this.updateChatDetail(message, k)
					rej(err)
				})
			})
		}
	}
	// 撤回消息
	recall(params)
	{
		return new Promise((resolve,rej)=>{
			$H.post('/chat/recall',{
				id:this.TO.id,
				message_id:params.message_id,
				chat_type:params.chat_type
			}).then(res=>{
				let message = JSON.parse(res)
				let list = this.getchatDetail();
				let index = list.findIndex(v=>{
					return v.id == message.message_id && v.chat_type == message.chat_type
				})
				if(index!==-1)
				{
					list[index].isremove=1;
					// chatDetail_${发送者id}_${this.TO.chat_type}_${接受者id}
					let key = `chatDetail_${this.user.id}_${this.TO.chat_type}_${this.TO.id}`;
					this.setStorage(key,list)
					this.updateChatItem(message,(item)=>{
						item.data ='你撤回了一条消息'
						return item
					})
				}
				resolve(message)
			}).catch(err=>{
				rej(err)
			})
		})
	}
	// 处理消息接受
	async onhandlerecall(message)
	{
		// key值chatDetail_当前用户id_接受类型_接收人/群id
		let key = `chatDetail_${this.user.id}_${message.chat_type}_${message.chat_type=='user'?message.from_id:message.id}`
		let list = this.getStorage(key);
		console.log(list);
		let index = list.findIndex(v=>v.id == message.message_id && v.chat_type == message.chat_type)
		if(index !== -1)
		{
			list[index].isremove = 1;
			this.setStorage(key,list);
			uni.$emit('onhandlerecall',message)
		}
		// 修改chatlist
		this.updateChatItem(message,(item)=>{
			item.data ='对方撤回了一条消息'
			return item
		})
	}
	connectSocket() {
		// 创建socket
		this.socket = uni.connectSocket({
			url: `${this.url}?token=${this.user.token}`,
			complete: () => {}
		})
		// 监听连接打开 
		this.socket.onOpen(() => this.onOpen());
		// 监听消息发送 
		this.socket.onMessage((res) => this.onMessage(res))
		// 监听错误
		this.socket.onError((err) => this.onError())
		// 监听关闭
		this.socket.onClose(() => this.onClose())
	}
	// 监听连接打开
	onOpen() {
		console.log('socket已连接');
		this.isonline = true;
		$H.post('/chat/getdisconnectmessage')
		// 获取离线聊天列表 
	}
	// 监听消息接受
	onMessage(res) {
		let data = JSON.parse(res.data)
		let {msg,message} = data
		if(typeof message == 'string')message = JSON.parse(message)
		if(msg=='fail')
		{
			return $store.dispatch('userlogout')
		}
		message.from_avatar = message.from_avatar ? message.from_avatar : '/static/images/userpic.png'
		message.to_avatar = message.to_avatar ? message.to_avatar : '/static/images/userpic.png'
		// 更新聊天记录
		if(msg == 'recall')
		{
			return this.onhandlerecall(message)
		}
		if(msg == 'newfriend')
		{
			return this.onhandlenewfriend(message);
		}
		if(msg == 'newmoment')
		{
			return this.onhandlenewmoment(message);
		}
		this.handlemessage(message)
	}
	async onhandlenewfriend(message)
	{
		$store.dispatch('getapplycount')
	}
	async onhandlenewmoment(message)
	{
		uni.showTabBarRedDot({
			index:2
		})
	}
	async handlemessage(message) {
		// 更新聊天会话
		console.log(message);
		this.updateChatList(message, false)
		// 添加消息记录 
		this.addChatDetail(message, false)
		// 全局通知
		uni.$emit('handlemessage', message)
		this.viberate();
	}
	// 消息振动提示
	viberate()
	{
		uni.vibrateShort()
		if(!this.bgAudioMannager.src)
		{
			this.bgAudioMannager.src = '/static/notice.mp3';
		}else
		{
			this.bgAudioMannager.play()
		}
	}
	// 监听关闭
	onClose() {
		console.log('socket已断开');
		// 下线
		this.isonline = false;
		this.socket = null;
		uni.$emit('networkerr', true)
	}
	Close() {
		this.isonline = false;
		this.socket = null;
	}
	// 监听错误
	onError() {
		// 下线
		console.log('socket错误已断开');
		this.isonline = false;
		this.socket = null;
		// 掉线重连
	}
	// 整理接受消息的格式
	formatMessagedata(params) {
		let user = $store.state.user.user;
		return {
			id: this.user.id || 0, 
			from_avatar: user.avatar || '/static/images/userpic.png',
			from_name:  this.user.nickname || this.user.username ,
			from_id: this.user.id || 0,
			to_id: params.to_id||this.TO.id,
			to_name:  params.to_name||this.TO.nickname || this.TO.username || this.TO.name,
			to_avatar: params.to_avatar ||this.TO.avatar || '/static/images/userpic.png',
			chat_type: params.chat_type || this.TO.chat_type, //聊天类型
			type: params.type, //数据类型
			data: params.data,
			options: params.options || {},
			created_time: (new Date().getTime()),
			isremove: 0,
			sendStatus: 'pending'
		}
	}
	// 添加聊天记录
	// isSend是指是否是自己是发送方
	addChatDetail(message, isSend = true) {
		// 获取对方id
		let id = isSend ? message.to_id : message.from_id;
		id = message.chat_type == 'group' ? message.to_id : id
		id = message.chat_type == 'system' ? message.to_id :id
		// key值chatDetail_当前用户id_接受类型_接收人/群id
		let key = `chatDetail_${this.user.id}_${message.chat_type}_${id}`
		// 获取原来的聊天记录
		let list = this.getchatDetail(key)
		// 标识 
		// 标识是为了区分每一条消息，为后面修改单条消息的某个属性作为基础
		message.k = "k" + list.length
		// 添加条数
		list.push(message)
		// 加入本地存储
		this.setStorage(key, list)
		// 返回
		return {
			data: message,
			k: message.k
		}
	}
	// 获取聊天记录
	getchatDetail(key = false)
	// 聊天消息过多时进行分页处理
	{//
		key = key ? key : `chatDetail_${this.user.id}_${this.TO.chat_type}_${this.TO.id}`
		return this.getStorage(key)
	}
	getStorage(key) {
		let list = uni.getStorageSync(key)
		return list ? JSON.parse(list) : []
	}
	// 获取更多聊天记录
	loadMoreChat(page = 1) {
		let list = this.getchatDetail();
		let length = list.length
		let limit = 10;
		let max = length - (page - 1) * limit;
		let min = length - page * limit > 0 ? length - page * limit : 0
		list = list.filter((v, index) => {
			return index < max && index >= min
		})
		return list
	}
	// 存储到本地
	setStorage(key, data) {
		key = key ? key : `chatDetail_${this.user.id}_${this.TO.chat_type}_${this.TO.id}`
		return uni.setStorageSync(key, JSON.stringify(data))
	}
	// 修改历史记录
	updateChatDetail(message, k, isSend = true) {
		// 获取原来的历史记录
		let id = isSend ? message.to_id : message.from_id;
		id = message.chat_type == 'group' ? message.to_id : id
		// key值chatDetail_当前用户id_接受类型_接收人/群id
		let key = `chatDetail_${this.user.id}_${message.chat_type}_${id}`
		let list = this.getStorage(key);
		// 根据k查找对应的聊天记录
		let index = list.findIndex(v => v.k == k)
		// 该条历史记录不存在
		if (index === -1) return;
		list[index] = message
		// 重新存储该条记录
		this.setStorage(key, list)
	}
	// 是否上线
	checkOnline() {
		if (!this.isonline) {
			this.confirmReconnect();
			return false
		}
		return true;
	}
	// 断线重连
	confirmReconnect() {
		uni.showModal({
			content: '你已经断线,是否重连',
			confirmText: '重新链接',
			success: (res) => {
				if (res.confirm) {
					this.connectSocket()
				}
			}
		})
	}
	handlemessagetype(message)
	{
		let {type} = message
		let data = message.data
		switch(type)
		{
			case 'image':
			data = '[图片]'
			break;
			case 'video':
			data = '[视频]'
			break;
			case 'audio':
			data = '[语音]'
			break;
			case 'emoticon':
			data = '[表情]'
			break;
			case 'card':
			data = '[名片]'
			break;
		}
		return data
	}
	// 更新会话列表
	updateChatList(message, isSend = true) {
		// 获取本地存储会话列表
		let list = this.getChatList();
		// 判断是否和对方处于聊天中
		let isCurrentChat = false;
		// 接受人/群id
		let id = 0
		let avatar = ''
		let username = ''
		/*// 会话列表item格式
		{
			id:1, //接受人的id
			chat_type:'user',//聊天类型
			avatar:'', //接收人头像
			name:this.TO.username, //接受人username
			update_time:new Date().getTime(), //最后一条数据的时间
			data, //最后一条数据的内容
			type:message.type, //最后一条数据的类型
			noreadnum:0,
			istop:false,
			shownickname:0,
			nowarn:0,
			strongwarn:0
		}
		*/
		// 判断私聊/群聊
		switch(message.chat_type)
		{
			case 'user':
			// 私聊
			// 判断是发送还是接受
			isCurrentChat = this.TO ? (isSend ? this.TO.id == message.to_id : this.TO.id == message.from_id) : false
			// 处于聊天状态
			id = isSend ? message.to_id : message.from_id;
			avatar = isSend ? message.to_avatar : message.from_avatar;
			username = isSend ? message.to_name : message.from_name;
			break;
			case 'group':
			// 群聊
			isCurrentChat = this.TO && this.TO.id == message.to_id
			id = message.to_id,
			avatar = message.to_avatar
			username = message.to_name
			break;
		}
		// 判断聊天会话是否存在
		let index = list.findIndex(v => {
			return v.id == id && v.chat_type == message.chat_type
		}) 
		let lastdata = this.handlemessagetype(message)
		let data = message.type == 'system' ? '系统消息:'+message.data :(isSend ? lastdata : message.isremove?'对方撤回了一条消息':`${message.from_name}: ${lastdata}`)
		let noreadnum = (isSend || isCurrentChat) ? 0 : 1
		if (index === -1) {
			// 未读数
			let chatItem = {
				id, //接受人的id
				chat_type: message.chat_type, //聊天类型
				avatar: message.to_avatar ? message.to_avatar : '/static/images/userpic.png', //发送人头像
				username, //发送人username
				update_time: new Date().getTime(), //最后一条数据的时间
				data, //最后一条数据的内容
				type: message.type, //最后一条数据的类型 
				noreadnum,
				istop: false,
				shownickname: false,
				nowarn: false,
				strongwarn: false,
			}
			// 不存在
			// 创建新的会话
			if(message.chat_type!=='user')
			{
				chatItem={
					...chatItem,
					user_id : message.user_id,
					remark : message.remark,
					invite_confirm : 1,
					group:message.group
				}
			}
			// 添加新的会话
			list.unshift(chatItem)
		} else {
			// 存在
			// 当前会话
			let item = list[index];
			// 更新最后一条消息(内容，类型，时间)
			item.update_time = new Date().getTime()
			item.avatar = item.avatar ? item.avatar : '/static/images/userpic.png'
			item.data = item.isremove ? '对方撤回了一条消息':data
			item.type = message.type
			item.username = username //接受人username
			// 未读数的更新
			if (!isCurrentChat) {
				item.noreadnum += noreadnum
			}
			// 置顶会话
			list = this.itemTOFirst(list, index)
		}
		// 存储
		this.setStorage(`chatList_${this.user.id}`, list)
		// 更新所有未读数
		let allnoread = this.updateBadge(list);
		// 通知vuex更新会话
		uni.$emit('updateChatList', list)
		// 其他地方监听
		// uni.$on('updateChatList',(list)=>{})
		// 返回list
		// 最后
	}
	// 更新未读数
	async updateBadge(list = false) {
		let num = 0;
		list = list ? list : this.getChatList()
		list.forEach(v => {
			num += v.noreadnum
		})
		if (num > 0) {
			uni.setTabBarBadge({
				index: 0,
				text: num <= 99 ? num.toString() : '99+'
			})
		} else {
			uni.removeTabBarBadge({
				index: 0
			})
		}
		uni.$emit('updateChatList', list)
		uni.$emit('updatenoreadnum', num)
	}
	// 获取本地存储会话列表
	getChatList() {
		let key = `chatList_${this.user.id}`
		console.log(this.getStorage(key));
		return this.getStorage(key); 

	}
	// 获取指定的会话
	getChatListDetail(id, chat_type) {
		let list = this.getChatList()
		let index = list.findIndex(v => v.id == id && v.chat_type == chat_type)
		if (index == -1) return false;
		let item = list[index];
		return item;
	}
	itemTOFirst(arr, index) {
		if (index !== 0) {
			arr.unshift(arr.splice(index, 1)[0])
		}
		return arr
	}
	updateChatListitem(id,nickname,chat_type)
	{
		let list = this.getChatList()
		let index = list.findIndex(v => {
			return (v.id == id && v.chat_type == chat_type)
		})
		if (index > -1 ) {
			// 修改item
			list[index].username = nickname;
			let key = `chatList_${this.user.id}`;
			this.setStorage(key, list)
			uni.$emit('updateChatListItem',{msg:'ok'})
		}
		
	}
	async readChatDetail(id,chat_type) {
		let list = this.getChatList();
		// 找到该条会话
		let index = list.findIndex(v => {
			return (v.id == id && v.chat_type == chat_type)
		})
		
		if (index > -1) {
			// 修改item
			list[index].noreadnum = 0;
			let key = `chatList_${this.user.id}`;
			this.setStorage(key, list) 
			this.updateBadge(list)
		}
	}
	async Readmomentremind()
	{
		uni.hideTabBarRedDot({
			index:2
		})
	}
	// 删除指定会话
	delChatDetail(id,chat_type) {
		let list = this.getChatList();
		// 找到该条会话
		let index = list.findIndex(v => {
			return (v.id == id && v.chat_type == chat_type)
		})
		if (index > -1) {
			// 修改item
			list.splice(index,1);
			let key = `chatList_${this.user.id}`;
			this.setStorage(key, list) 
			this.updateBadge(list)
		}
	}
	// 更新指定会话列表
	async updateChatItem(where,item,isSend=false)
	{
		let list = this.getChatList();
		console.log(list);
		// 找到该条会话
		let index = list.findIndex(v => {
			return (v.id ==isSend? where.from_id: where.id && v.chat_type ==  where.chat_type)
		})
		if(index!==-1) 
		{
			if(typeof item == 'function')
			{
				list[index] = item(list[index])
			}else
			{
				list[index][item.key] = item.value;
			}
			let key = `chatList_${this.user.id}`;
			this.setStorage(key, list)  
			uni.$emit('updateChatListItem',{msg:'ok'})
			this.TO = list[index]
		}
	}
	// 清除指定聊天会话内容
	async clearchat(id,chat_type) {
		let list = this.getChatList();
		// 找到该条会话
		let index = list.findIndex(v => {
			return (v.id == id && v.chat_type == chat_type)
		})
		if (index > -1) { 
			// 修改item
			list[index].data = '';
			uni.removeStorageSync(`chatDetail_${this.user.id}_${chat_type}_${id}`)
			this.setStorage(`chatList_${this.user.id}`, list)  
			uni.$emit('clearhistory') 
			uni.$emit('updateChatListItem',list)
		}
	}
	// 删除本地指定聊天记录item
	async deleteChatDetailItem(item)
	{
		let list = this.getchatDetail()
		let index = list.findIndex(v=>v.id == item.id && v.chat_type == item.chat_type && v.type == item.type)
		if(index!==-1)
		{
			list.splice(index,1)
			this.setStorage(`chatDetail_${this.user.id}_${this.TO.chat_type}_${this.TO.id}`,list)
		}
		
	}
	
}
export default Chat
