<template>
	<text class="bg-danger rounded-circle  text-center text-white" :class="badgeclass"
	style="width:30upx;height: 30upx;font-size: 26rpx; " :style="badgestyle">{{data}}</text>
</template>

<script>
	export default{
		props: {
			badgestyle: {
				type: String,
				default: ''
			},
			badgeclass: {
				type: String,
				default: ''
			},
			data:{
				type:String,
				default:''
			}
		},
	}
</script>

<style>
</style>
