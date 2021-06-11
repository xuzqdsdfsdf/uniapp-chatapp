export default{
	onShow()
	{
		if(!uni.getStorageSync('user'))
		{
			uni.showToast({
				title:'请先登录',
				icon:'none'
			})
			
			uni.reLaunch({
				url:'/pages/loginandresign/login'
			})
		}
	},
	methods:{
		backToast()
		{
			uni.showToast({
				title:'非法参数',
				icon:'none'
			})
			uni.navigateBack({
				delta:1
			})
		}
	}
}