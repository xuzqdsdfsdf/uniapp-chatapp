<template>
	<view class="">
		<view v-if="type=='image'" class="py-2 border-bottom flex flex-wrap">
			<image v-for="(item,i) in imageList"  @longpress="$emit('longpress',{e:$event,i})" @click="previewimage(item)" :key="i" :src="item"  style="width: 206.6rpx;height: 206.6rpx;" class="mr-1 mb-1 rounded"  mode=""></image>
			<view @click="$emit('chooseimage')" v-if="imageList.length<9" class="flex border   justify-center align-center rounded" style="width: 206.6rpx;height:206.6rpx;" >
				<view class="flex  justify-center align-center  px-2 ">
					<text style="font-size: 80rpx;" class="text-light-muted">+</text>
				</view>
			</view>
		</view> 
		<view v-else>
			<view @click="$emit('choosevideo')" v-if="!video" class="flex border   justify-center align-center rounded" style="width: 650rpx;height:456.6rpx;" >
				<view class="flex  justify-center align-center  px-2 ">
					<text style="font-size: 80rpx;" class="text-light-muted">+</text>
				</view>
			</view>
			<view class="" v-else>
				<image :src="video.poster" style="width: 650rpx;height:456.6rpx;" ></image>
				<text class="text-light-muted font-md text-center p-2">点击切换视频</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			imageList:{
				type:Array,
				default:()=>{[]}
			},
			type:{
				default:'image',
				type:String
			},
			video:{
				type:[Object,Boolean],
				default:false
			}
		},
		methods: {
			previewimage(item)
			{
				uni.previewImage({
					current:item,
					urls:this.imageList
				})
			},
		},
	}
</script>

<style>
</style>
