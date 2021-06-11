<template>
	<view class=" mr-2 px-2 py-2   rounded" :class="disabled?'bg-light border':'bg-success'"  @click="btnclick">
		<slot>
			<text class="text-white font"  :class="disabled?'text-light-muted':'text-white'">{{content}}</text>
		</slot>
	</view>
</template>

<script>
export default {
	props: {
		content: {
			type: String,
			default: ''
		},
		disabled:{
			type:Boolean,
			default:true
		}
	},
	computed: {
		
	},
	methods:{
		btnclick()
		{
			if(!this.disabled)
			{
				return this.$emit('click')
			}
		}
	}
}
</script>

<style>
	.main-bg-color {
		background-color: #08C060;
	} 
</style>
