<template>
	<view  style="background-color: #ededed;" :style="getstyle" class="flex align-center">
		<slot name="divider"></slot>
	</view>
</template>

<script>
	export default{
		props:{
			dividerheight:{
				type:Number,
				default:60
			}
		},
		computed: {
			getstyle() {
				return `height:${this.dividerheight}upx;`
			}
		},
	}
</script>

<style>
</style>
