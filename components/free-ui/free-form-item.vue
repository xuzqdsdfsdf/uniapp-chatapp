<template>
	<view class="flex  flex-column my-1">
		<text class="text-muted font py-1">{{title}}</text>
		<slot>
			
		</slot>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
		},
	}
</script>

<style>
</style>
