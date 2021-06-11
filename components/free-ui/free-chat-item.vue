<template>
	<div class="flex flex-column ">

		<view class="flex align-center justify-center pb-4 pt-2" v-if="isshowtime">
			<text class="font-sm text-light-muted">{{isshowtime}}</text>
		</view>
		<view class="flex align-center justify-center pb-4 pt-2" v-if="item.isremove">
			<text class="font-sm text-light-muted">{{item.from_id == this.user.id ? '您':'对方'}}撤回了一条消息</text>
		</view>
		<view class=" px-2 py-1 flex justify-center align-center text-left" v-if="item.type=='system'">
			<text class="font-sm text-light-muted  ">{{item.data}}</text>
		</view>
		<template v-else>
			<view v-if="!item.isremove"  class="flex  align-start  mb-3  position-relative"
				:class="!isself?' justify-start ':' justify-end '">
				<!-- 时间 -->
				<!-- 好友 --> 
				<template v-if="!isself && item.type!=='system'">
					<free-avatar :src="item.to_avatar" size="70" clickType="navigato"></free-avatar>
					<text v-if="istext" class="iconfont  text-white font-md position-absolute font-md"
						:style="isshownickname?'top: 60upx;':'top:20rpx'" style="left: 77upx;">&#xe628;</text>
				</template>
				<!-- 消息内容 -->
				<view class="flex flex-shrink align-end">
					<view v-if="isself" :class="isshowchatbg? 'align-end' : 'align-center'"
						class="mr  p-1 flex   justify-center">
						<text @click="resend" v-if="item.sendStatus === 'fail'"
							class="iconfont text-danger p-1 font-lg">&#xe615;</text>
					</view>
					<view class="">
						<view v-if="isshownickname" :class="isself?'justify-end mr-3':'justify-start ml-3'"
							class="flex  mb-1 ">
							<text class="font text-muted mb-1">{{item.from_name}}</text>
						</view>
						<div @longpress="longpress" class="font-md   rounded " :class="isshowchatbg"
							style="max-width: 500rpx">
							<text v-if="item.type==='text' && item.type!=='system' "
								class="font-md flex p-2 ">{{item.data}}</text>
							<!-- 文字消息||表情包 -->
							<image @touchstart="startplayaudio" @touchend="endplayaudio($event,'clickimage')"
								v-else-if="item.type==='emoticon'||item.type=='image'" class="m-1" :src="item.data"
								mode="widthFix" style="width: 150rpx;height: 150rpx;"></image>
							<!-- 表情包 -->
							<view class="font-md p-1 flex align-center" :style="getcontentwidth"
								@touchstart="startplayaudio" @touchend="endplayaudio($event,'audioplay')"
								v-if="item.type==='audio'">
								<image v-if="isself" :src="isplaying?'/static/audio/play.gif':'/static/audio/audio3.png'"
									style="width: 50rpx;height: 50rpx;" mode=""></image>
								<text style="line-height: 45upx;">{{item.options.time}}</text>
								<image v-if="!isself" :src="isplaying?'/static/audio/play.gif':'/static/audio/audio3.png'"
									style="width: 50rpx;height: 50rpx;" mode=""></image>
							</view>
							<!-- 视频 -->
							<view class="font-md p-1 flex align-center justify-center position-relative bg-hover-light "
								v-if="item.type==='video'">
								<image :src="item.options.poster" style="width: 400upx;height: 400upx;"></image>
								<text class="iconfont text-white position-absolute " @touchstart="startplayaudio"
									@touchend="endplayaudio($event,'playvideo')"
									style="font-size:80upx;width: 80upx;height: 80upx;top:160upx;left: 160upx;">&#xe67a;</text>
							</view>
							<!-- card -->
							<view  class="px-3 bg-white rounded " hover-class="bg-hover-light" v-else-if="item.type == 'card'" @touchstart="startplayaudio"
									@touchend="endplayaudio($event,'touser')">
								<view class="flex align-center    border-bottom " style="padding-right: 80rpx;">
									<!-- 对方的头像 -->
									<free-avatar :src="item.data" :size="80"></free-avatar>
									<view class="p-4">
										<text class="font-md mr-1">{{item.options.name}}</text>
										<text class="text-light-muted py-1 font-sm">{{item.options.username}}</text>
									</view>
								</view>
								<view class="flex align-center py-1">
									<text class="text-light-muted   font-sm">个人名片</text>
								</view>
							</view>
						</div>
					</view>
				</view>
				<!-- 本人 -->
				<text v-if="istext && isself" class="iconfont mr-3  text-chat-item font-md position-absolute font-md"
					style="right: 77upx" :style="isshownickname?'top:60rpx;':'top:20rpx'">&#xe627;</text>
				<view v-if="isself">
					<free-avatar clickType="navigato" :src="item.from_avatar" size="70"></free-avatar>
				</view>
			</view>
		</template>
	</div>
</template>

<script>
	import $T from '@/common/free-lib/time.js'
	import {
		mapState,
		mapActions
	} from 'vuex'
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	export default {
		computed: {
			...mapState({
				xzq: state => state.audio.xzq,
				user: state => state.user.user
			}),
			isshowtime() {
				return $T.getChatTime(this.item.created_time, this.lasttime)
			},
			istext() {
				return this.item.type == 'text'
			},
			isshowchatbg() {
				let istext = (this.item.type === 'text' || this.item.type === 'audio') && this.isself ? 'bg-chat-item' :
					'bg-white'
				// let istext = 'bg-chat-item ' : 'bg-white '
				let isself = !this.isself ? ' ml-3 bg-white' : ' mr-3 '
				return isself + ' ' + istext
			},
			getcontentwidth() {
				if (this.item.type == 'audio') {
					let time = this.item.options.time;
					let width = time * (500 / 60)
					width = width > 120 ? width : 120;
					return `width:${width}rpx`;
				}
			}
		},
		components: {
			freeAvatar
		},
		data() {
			return {
				isplaying: false,
				innerAudioContext: null,
				timeStamp: 0
			}
		},
		props: {
			item: () => {},
			Index: Number,
			lasttime: Number,
			isself: {
				type: Boolean,
				default: String
			},
			isshownickname: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			// 过滤掉除了audio以外的类型
			if (this.item.type === 'audio') {
				this.$audioon(this.playaudio);
			}
			// this.$on((res)=>{
			// 	console.log(res);
			// })
		},

		destroyed() {
			this.$audiooff(this.playaudio)
			if (this.innerAudioContext) {
				this.innerAudioContext.destroy();
				this.innerAudioContext = null;
			}
		},
		methods: {
			...mapActions(['$audioemit', '$audioon', '$audiooff']),
			// 重新发送失败信息
			resend() {
				this.$emit('resend', this.item);
			},
			// 播放视频
			playvideo() {
				uni.navigateTo({
					url: "/pages/msg/video/videodetail?url=" + this.item.data
				})
			},
			touser()
			{
				this.$emit('touser')
			},
			// 播放音频
			playaudio(res) {
				// 是否有播放实例
				if (this.innerAudioContext) {
					if (res !== this.Index) {
						this.innerAudioContext.stop()
					}
				}
			},
			audioplay() {
				this.$audioemit(this.Index);
				// 每一个组件都去判断是否有innerAudioContext实例如果有则暂停然后
				if (!this.innerAudioContext) {
					this.innerAudioContext = uni.createInnerAudioContext();
					this.innerAudioContext.src = this.item.data;
					this.innerAudioContext.play()
					// 监听播放
					this.innerAudioContext.onPlay(() => {
						this.isplaying = true;
					})
					this.innerAudioContext.onPause(() => {
						this.isplaying = false;
					})
					// 监听暂停
					this.innerAudioContext.onError(() => {
						this.isplaying = false;
					})
					// 监听错误
					this.innerAudioContext.onStop(() => {
						this.isplaying = false;
					})
					// 监听停止
				} else {
					this.innerAudioContext.stop()
					this.innerAudioContext.play()
				}
			},
			clickimage(e, url) {
				this.$emit('preview', this.item.data)
			},
			longpress(e) {
				if(this.item.type=='system')return;
				let left = 0;
				let top = 0;

				// #ifdef APP-NVUE
				if (e.changedTouches.length > 0 && Array.isArray(e.changedTouches)) {
					left = e.changedTouches[0].screenX;
					top = e.changedTouches[0].screenY;
				}
				// #endif
				// #ifdef MP-WEIXIN
				left = e.detail.x;
				top = e.detail.y
				// #endif
				this.$emit('longtouch', {
					left,
					top,
					index: this.Index
				})
			},
			startplayaudio(e) {
				this.timeStamp = e.timeStamp
			},
			endplayaudio(e, doevent) {
				if (e.timeStamp - this.timeStamp < 300) {
					this[doevent]()
				}
			},

		}

	}
</script>

<style>
</style>
