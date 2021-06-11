<template>
	<view>
		<div class="fixed-top " @click="log" :class="isshowdefaultcolor?'top-nav-bgc jcenter border-bottom':'bg-white'">
			<view class="align-center ">
				
			</view>
			<!-- 状态栏 -->
			<view :style="'height:'+statusbarheight+'px'">
			</view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between " style="height: 90upx;">
				<!-- 左边 -->
				<view class="flex align-center flex-1" style="line-height: 100%text-overflow: ellipsis;">
					<text v-if="isshowback"  class="iconfont ml-2" @click="back">&#xe67e;</text>
					<!-- 标题 -->
					<view v-if="title">
						<text class="font-md ml-2 font"  :style="titlecolor?'color:#fff':'color:#000'">{{getTitle}}</text>
						<slot name="title"></slot>
					</view>
					<slot name="centerarea"></slot>
				</view>
				<!-- 右边 -->
				<view class="flex align-center" v-if="showsearch">
					<view class="" hover-class="bg-hover-light" @click="tosearch">
						<text   class="iconfont  font-md p-2">&#xe67c;</text>
					</view>
					<view class="" hover-class="bg-hover-light" @click="searchextend">
						<text  class="iconfont font-md p-2">&#xe660;</text>
					</view>
				</view>
				<slot name="options"></slot>
			</view>
		</div>
		<view :style="getnavstyle">

		</view>
		<view class="py-2 px-4 flex align-center justify-center disconnect" style="background-color: #FBEDEE;height:80rpx" v-if="networkerr" @click="reconnect">
			<text  class="iconfont text-danger mx-3 font-md">&#xe615;</text>
			<text style="color:#A59D9C ;" class="font-sm flex-1">网络连接不可用</text>
		</view> 
		<!-- 弹出层 -->
		<free-popup ref="extend" :bodyH="getmenuheight" :bodyW="320" transformOrigin="right top">
			<view style="width:320upx;height: 525upx;background-color:#4B4B48 ;" :style="getmenustyle" class=" bg-white d-flex flex-column">
				<view class="flex-1 flex   align-center" @click="clickevent(item)" hover-class="bg-hover-dark" v-for="(item,index) in extendsmenu"
				 :key="index">
					<text class="pl-3 iconfont  font-md  text-white">{{item.icon}}</text>
					<text class="ml-2 py-3    borderbot font-md flex-1 border-bottom text-white" style="box-sizing: border-box; border-color: #525252 ;border-bottom-width:2upx ;">{{item.name}}</text>
				</view>
			</view>
		</free-popup>

	</view>
</template>

<script>
	import {mapState} from 'vuex'
	import freePopup from './free-popup.vue'
	import iconButton from '@/components/free-ui/iconbutton.vue'
	export default {
		data() {
			return {
				statusbarheight: 0,
				navheight: 0,
				extendsmenu: [{
						name: '发起群聊',
						event: 'createGroup',
						icon: '\ue63f'
					},
					{
						name: '添加朋友',
						event: '',
						icon: '\ue61f'
					},
					{
						name: '扫一扫',
						event: '',
						icon: '\ue62d'
					},
					{
						name: '收付款',
						event: '',
						icon: '\ue60c'
					},
					{
						name: '帮助与反馈',
						event: '',
						icon: '\ue678'
					},

				]
			}
		},
		props: {
			title: {
				type: [String, Boolean],
				default: false
			},
			isshowback: {
				type: Boolean,
				default: false
			},
			noreadnum: {
				type: [Number.String],
				default: 0
			},
			showsearch: {
				type: Boolean,
				default: true
			},
			isshowdefaultcolor: {
				type: Boolean,
				defualt: true
			},
			titlecolor: {
				type: Boolean,
				default: false
			},
			networkerr:{
				type:[Boolean,String],
				defualt:false 
			}
		},
		computed: {
			...mapState({
				chat:(state)=>state.user.chat
			}),
			getmenuheight() {
				return this.extendsmenu.length > 0 ? 105 * this.extendsmenu.length : 0
			},
			getnavstyle() {
				return `height:${this.navheight}px`
			},
			getTitle() {
				let readnum = this.noreadnum > 0 ? `${this.title}(${this.noreadnum})` : `${this.title}`
				return readnum
			}
		},
		components: {
			iconButton,
			freePopup
		},
		mounted() {
			// 获取状态栏高度u
			this.statusbarheight = plus.navigator.getStatusbarHeight()
			this.navheight = this.statusbarheight + uni.upx2px(90)
		},
		methods: {
			searchextend(e) {
				this.$refs.extend.show(uni.upx2px(445), uni.upx2px(132));
			}, 
			back() {
				uni.navigateBack({
					delta: 1
				})
				this.$emit('back')
			},
			log() {

			},
			tosearch() {
				uni.navigateTo({
					url: '/pages/common/search/search'
				})
			},
			clickevent(e) {
				uni.navigateTo({ 
					url:'/pages/mail/mail/mail_connector?type=create_group' 
				})
				this.$refs.extend.hide()
			},
			reconnect()
			{  
				this.chat.checkOnline()
			}

		},
	}
</script>

<style>
</style>
