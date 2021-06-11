<template>
	<view class="flex align-center  w-100 "  :class="itemstyle" :style="getstyle" @click="$emit('click')">
		<view class="pl-3   py-2" v-if="icon">
			<slot name="icon"></slot> 
			<image class=""  :class="rounded?'rounded-circle':''" v-if="src" :src="src||'/static/images/userpic.png'"   :style="getimgstyle"></image>
		</view> 
		<view class="pl-3 flex flex-1 align-center  flex-1 " :class="isshowborder?'border-bottom':''"> 
			<slot name="content"> 
				<text class="flex-1 flex align-center py-4  font-md ">{{text}}</text>
			</slot>
			<view class="flex align-center" v-if="rightarea">
				<slot name="rightcontent"></slot> 
				<text v-if="showarray" class="iconfont font-md mr-4" style="color: #ACACAC;">&#xe7eb;</text>
			</view>
		</view> 
 
	</view>
</template>

<script>
	export default {
		props: {
			rounded:{
				type:Boolean,
				default:false
			},
			src: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: ''
			},
			showarray: {
				type: Boolean,
				default: false
			},
			ispadding: {
				type: Boolean,
				default: false
			},
			imgsize: {
				type: [String, Number],
				default: 75
			},
			isshowmarginbottom: {
				type: Boolean,
				default: false
			},
			icon:{
				type:Boolean,
				default:true
			},
			isshowdefaultcolor:{
				type:Boolean,
				default:true
			},
			isshowborder:{
				type:Boolean,
				default:true
			},
			itemborder:{
				type:Boolean,
				default:false
			},
			rightarea:{
				type:Boolean,
				default:true
			},
		},
		computed: {
			itemstyle()
			{
			  let itemclass = ''
			  itemclass += this.itemborder?'border-bottom ': ''
			  return  itemclass += this.isshowdefaultcolor?'bg-white':'top-nav-bgc'
			},
			getstyle() {
				return this.ispadding ? 'py-2' : ''
			},
			getimgstyle() {
				return `width:${this.imgsize}upx;height:${this.imgsize}upx;margin-bottom:${this.isshowmarginbottom?'30upx':'0'}`
			}
		},
	}
</script>

<style>
</style>
