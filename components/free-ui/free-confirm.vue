<template>
	<free-popup ref="friendcard" MaskColor transformOrigin="center center">
		<view class="flex flex-column bg-white position-relative rounded p-3 mt-3" :style="confirmsize" @click="log">
			<text class="font-md mb-2">{{title}}</text>
			<slot name="content">
				<view class="flex align-center mb-2">
					<image src="/static/images/demo/demo6.jpg" style="width: 80rpx;height: 80rpx;" mode=""></image>
					<text class="font-sm ml-2">皮皮</text>
				</view>
				<view class="m-3">
					<text class="font-sm text-light-muted">[个人名片]成都不倒翁</text>
				</view>
				<view class="p-1 m-2 border-bottom">
					<input type="text" placeholder="给朋友留言" style="height: 60rpx;" class="font-sm "
						placeholder-class=" text-light-muted font-sm " />
				</view>
			</slot>
			<!-- 底部按钮 -->
			<view style="height: 100rpx;"></view>
			<view style="height: 100rpx;"
				class="position-absolute border-top left-0 right-0 bottom-0 flex align-center justify-center">
				<view class="flex-1 flex align-center justify-center" @click="closepop">
					<text class="font-md ">取消</text>
				</view>
				<view class="flex-1 flex align-center justify-center" @click="confirm">
					<text class="text-primary font-md ">确定</text>
				</view>
			</view>
		</view>
	</free-popup>
</template>

<script>
	import freePopup from '@/components/free-ui/free-popup.vue'
	export default {
		components: {
			freePopup
		},
		data() {
			return {
				screenHeight: 0,
				screenWidth: 0,
				statusBarHeight: 0,
				callback: null
			}
		},
		computed: {
			popupbottom() {
				return ((this.screenHeight - uni.upx2px(this.confirmH)) / 2)
			},
			popupleft() {
				return ((this.screenWidth - uni.upx2px(this.confirmW)) / 2)
			},
			confirmsize() {
				return `width:${this.confirmW}rpx;height:${this.confirmH}rpx;`
			}
		},
		props: {
			title: {
				type: String,
				default: '提示'
			},
			confirmW: {
				type: Number,
				default: 500
			},
			confirmH: {
				type: Number,
				default: 400
			}
		},
		mounted() {
			let res = uni.getSystemInfoSync();
			this.screenHeight = res.screenHeight;
			this.screenWidth = res.screenWidth;
			this.statusBarHeight = res.statusBarHeight
		},
		methods: {
			open(callback) {
				this.callback = callback
				this.$refs['friendcard'].show(this.popupleft, this.popupbottom);
			},
			closepop() {
				this.$refs['friendcard'].hide();
			},
			log() {

			},
			confirm() {
				this.callback(() => {
					this.closepop()
				})
			}

		}
	}
</script>

<style>
</style>
