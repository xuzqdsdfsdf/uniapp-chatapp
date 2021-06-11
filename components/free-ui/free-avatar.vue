<template>
	<image :src="src" :class="rounded"  @click="navigateclick" :style="getsize"></image>
</template>

<script>
	export default{
		props: {
			src: {
				type: String,
				default: ''
			},
			rounded:{
				type:String,
				default:'rounded'
			},
			size:{
				type:Number,
				default:90
			},
			// 是否跳转到个人聊天设置
			clickType:{
				type:String,
				default:'none'
			}
		},
		computed: {
			getsize() {
				return `width: ${this.size}rpx;height: ${this.size}rpx;`;
			}
		},
		methods: { 
			navigateclick() {
				switch (this.clickType){
					case 'navigato':
						uni.navigateTo({ 
							url:'/pages/mail/user_base/user_base'
						})
						break;
					default:
						this.$emit('click')
						break;
				}
			}
		},
	}
</script>

<style>
</style>
