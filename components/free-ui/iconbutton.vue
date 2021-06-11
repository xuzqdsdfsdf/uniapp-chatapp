<template>
	<view @click="$emit('click')" class="flex align-center justify-center" style="width: 90rpx;height: 90rpx; " hover-class="bg-hover-light">
		<slot></slot>
	</view>
</template>
<script>
	export default{
		props: {
			fontname: String
		},
	}
</script>

<style>
</style>
