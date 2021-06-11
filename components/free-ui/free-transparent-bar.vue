<template>
	<view class="">
		<view class="position-fixed"  @click="log"  :style="navstyle">
			<!-- 状态栏 -->
			<view class="" :style="'height:'+statusbarheight+'px'">
			</view>
			<!-- 导航 --> 
			<view class="w-100 flex align-center justify-between " style="height: 90rpx;">
				<!-- 左边 -->
				<view class="flex align-center" > 
					<text  class="iconfont ml-2" :style="textcolor" @click="back">&#xe67e;</text>
					<!-- 标题 --> 
					<text class="font-md ml-2 " :style="textcolor">{{title}}</text>
				</view>
				<!-- 右边 -->
				<slot name="options">
					<text class="iconfont font-md mr-3" :style="textcolor" @click="newmoment">&#xe619;</text>
				</slot>
			</view>
		</view>
		<!-- 弹出层 -->
		<!-- <free-popup ref="extend" :bodyH="getmenuheight" :bodyW="320"  transformOrigin="right top">
			<view style="width:320upx;height: 525upx;background-color:#4B4B48 ;" :style="getmenustyle" class=" bg-white d-flex flex-column">
				<view class="flex-1 flex   align-center" @click="clickevent(item.event)" hover-class="bg-hover-dark" v-for="(item,index) in extendsmenu"
				 :key="index">  
					<text class="pl-3 iconfont  font-md  text-white">{{item.icon}}</text>
					<text class="ml-2 py-3    borderbot font-md flex-1 border-bottom text-white" style="box-sizing: border-box; border-color: #525252 ;border-bottom-width:2upx ;">{{item.name}}</text>
				</view>  
			</view>  
		</free-popup> -->
		
	</view>
</template>

<script>
	import freePopup from './free-popup.vue'
	import iconButton from '@/components/free-ui/iconbutton.vue'
	export default {
		data() {
			return {
				statusbarheight: 0,
				navheight: 0,
			}
		},
		props: {
			title:{
				type:String,
				defualt:''
			},
			isshowback:{
				type:Boolean,
				default:false
			},
			noreadnum: {
				type: Number,
				default: 0
			},
			isshowdefaultcolor:{
				type:Boolean,
				defualt:true
			},
			titlecolor:{
				type:Boolean,
				default:false
			},
			// 距离顶部的高度
			scrollTop:{
				type:Number,
				default:0
			},
		},
		computed: {
			getmenuheight() {
				return this.extendsmenu.length > 0 ? 105 * this.extendsmenu.length : 0
			},
			opacityrate() {
				let start = uni.upx2px(500);
				let end = uni.upx2px(620)
				let H = end - start;
				let num = 0;
				let sub = this.scrollTop - start
				if(this.scrollTop > start)
				{
					num = sub / H ;
				} 
				return num>1?1:num
			},
			navstyle(){
				return `background-color:rgba(255,255,255,${this.opacityrate})`
			},
			textcolor(){
				if(this.opacityrate>0)
				{
					return `color:(255,255,255,${this.opacityrate})`
				}
				return `color:#fff`
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
			back()
			{
				uni.navigateBack({
					delta:1
				})
				this.$emit('back')
			},
			log()
			{
				
			},
			newmoment()
			{
				let options=[
					{
						name:'文字',
						key:'content'
					},
					{
						name:'图文',
						key:'image'
					},
					{
						name:'音频',
						key:'video'
					}
				]
				uni.showActionSheet({
					itemList:options.map(v=>v.name),
					success:(res)=>{
						uni.navigateTo({
							url:'/pages/find/send_friend_moment/send_friend_moment?type='+options[res.tapIndex].key
						})
					}
				})
			}
		},
	}
</script>

<style>
</style>
