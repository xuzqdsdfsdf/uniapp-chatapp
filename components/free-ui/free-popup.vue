<template>
	<view class="popup" style="z-index:9999;overflow:hidden" v-if="status">
		<!-- 蒙版 -->
		<view @click="hide" v-if="mask" style="z-index: 999;" class="position-fixed  top-0 left-0 right-0" :style="getmaskcolor">
		</view>
		<!-- 放大 -->
		<view ref="popupel" v-if="animatedtype" style="z-index: 2000;" class="position-fixed bg-white free-animated" :style="getbodystyle" :class="getbottom">
			<slot></slot>
		</view>
		<!-- 平滑出现 -->
		<view v-else ref="popupel" class="_body  position-fixed left-0 right-0" :style="PopupHeight+getBodyWidth">
			<slot />
		</view>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const animation = weex.requireModule('animation')
	// #endif
	export default {
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
					this.maxX = res.windowWidth - uni.upx2px(this.bodyW);
					this.maxY = res.windowHeight - uni.upx2px(this.bodyH);
				}
			})
		},
		computed: {
			getmaskcolor() {
				let color = this.MaskColor ? 0.5 : 0
				return `background-color:rgba(0,0,0,${color});bottom:${this.modalbottom}upx;`
			},
			getbottom() {
				// 如何不是处在最下短则添加圆角和边框
				let bottom = this.bottom ? 'left-0 right-0 bottom-0' : 'rounded border'
				return bottom
			},
			getbodystyle() {
				let left = this.x > -1 ? `left:${this.x}px;` : '';
				let top = this.y > -1 ? `top:${this.y}px;` : '';
				return left + top;
			},
			PopupHeight() {
				return `height:${this.popupH}rpx; bottom:${-this.popupH}rpx;`
			},
			getBodyWidth()
			{
				let margin=750-this.width
				return `width:${this.width}rpx;margin:0 ${margin/2}rpx;`
			},
			centerposition()
			{
				let center=this.center?'flex align-center justify-center':''
				return center
			}
		},
		data() {
			return {
				status: false,
				x: -1,
				y: -1,
				maxX: 0,
				maxY: 0,
			}
		},
		props: {
			center:{
				type:Boolean,
				default:false
			},
			animatedtype: {
				type: Boolean,
				default: true
			},
			popupH: {
				type: Number,
				default: 400
			},
			popuptype: {
				type: String,
				default: 'none'
			},
			// 配置蒙版颜色
			MaskColor: {
				type: Boolean,
				default: false
			},
			// 是否开启蒙版
			mask: {
				type: Boolean,
				default: true
			},
			bottom: {
				type: Boolean,
				defautl: false,
			},
			bodyW: {
				type: Number,
				default: 0,
			},
			bodyH: {
				type: Number,
				default: 0
			},
			transformOrigin: {
				type: String,
				default: 'left top'
			},
			modalbottom: {
				type: Number,
				default: 0
			},
			popupbottom: {
				type: Number,
				default: 400
			},
			animationduration:{
				type:Number,
				default:200
			},
			width:{
				type:Number,
				default:650 
			}
		},
		
		methods: {
			show(x, y,) {
				this.status = true;
				this.x = x > this.maxX ? this.maxX : x;
				this.y = y > this.maxY ? this.maxY : y;
				// #ifdef APP-NVUE			
				this.$nextTick(() => {
					if(this.animatedtype)
					{
						animation.transition(this.$refs.popupel, {
							styles: {
								transform: 'scale(1,1)',
								transformOrigin: this.transformOrigin,
								opacity: 1
							},
							duration: this.animationduration, //msum
							timingFunction: 'ease',
						}, () => {})
					}else
					{
						animation.transition(this.$refs.popupel, {
							styles: {transform: `translateY(${-uni.upx2px(this.popupH)}px)`},
							duration: this.animationduration, //msum
							timingFunction: 'ease',
						}, () => {})
					}
					
				})
				// #endif

			},
			hide() { 
				this.$emit('hide')
				animation.transition(this.$refs.popupel, {
					styles: this.animatedtype ? {
						transform: 'scale(0,0)',
						transformOrigin: this.transformOrigin,
						opacity: 0 
					} : {
						transform: `translateY(${uni.upx2px(this.popupH)}px)`
					},
					duration: this.animationduration, //msum
					timingFunction: 'ease',
				}, () => {
					this.status = false;
				})
			}
		},
		destroyed() {
			this.status = false;
		}
	}
</script>

<style>
	.free-animated {
		transform: scale(0, 0);
		opacity: 0;
	}

	._body {
		z-index: 2021;
		background-color: #fff;
		border-radius: 20rpx 20rpx 0 0;
	}
</style>
