<template>
	<view hover-class="bg-light" :class="istop?'bg-light':''" @click="todetail">
		<div class="flex align-center"  @longpress="longpress" @click="onclick">
			<!-- 左边 -->
			<view class="flex align-center justify-center  py-3 position-relative" style="width: 145rpx">
				<free-avatar :src="item.avatar" rounded="rounded"></free-avatar>
				<free-badge v-if="item.noreadnum" badgeclass="position-absolute" badgestyle="top:15upx;right:18upx" :data="item.noreadnum"></free-badge>
			</view>
			<!-- 右边 -->
			<view class="flex-1 flex flex-column justify-center my-3  border-light-secondary">
				<view class="flex align-center justify-between mb-1 " > 
				<view   style="line-height: 100%;max-width: 350rpx;overflow: hidden;white-space: nowrap;max-height: 40rpx;">
					<text class="font " >{{itemtitle}}</text>
				</view>
					<text class="font-sm text-light-muted pr-3">{{item.update_time|formate}}</text>
				</view>
				<text class="text-light-muted mt-1 font-sm text-ellipsis">{{item.data}}</text>
			</view>
		</div>
	</view>
</template>

<script>
	import freebase from '@/common/free-lib/free-base.js'
	import freeBadge from '@/components/free-ui/free-badge.vue'
	import freeAvatar from '@/components/free-ui/free-avatar.vue'
	export default {
		components: {
			freeBadge,
			freeAvatar
		},
		mixins:[freebase],
		props: {
			item: Object,
			index: Number,
			istop:{
				type:Boolean,
				default:false
			},
		},
		computed: {
			itemtitle() {
				return this.item.username.length>14?this.item.username.substring(0,13)+'...':this.item.username
			}
		},
		methods: {
			longpress(e) {
				let left=0;
				let top=0;
				// #ifdef APP-NVUE
				if(e.changedTouches.length>0&&Array.isArray(e.changedTouches))
				{
					left=e.changedTouches[0].screenX;
					top=e.changedTouches[0].screenY;
				}
				// #endif
				// #ifdef MP-WEIXIN
				left=e.detail.x;
				top=e.detail.y
				// #endif
				this.$emit('longtouch',{left,top,index:this.index})
			},
			todetail()
			{
				this.$emit('todetail',this.item)
			},
			onclick()
			{
				this.$emit('onclick')
			}
		},
	}
</script>

<style>
</style>
