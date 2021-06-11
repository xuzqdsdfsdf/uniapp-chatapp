// request.js
import config from './config.js'
import $store from '@/store/index.js'
export default {
    // 全局配置
    common:{
        baseUrl:config.baseurl,
        header:{
            'Content-Type':'application/json;charset=UTF-8',
        },
        data:{},
        method:'GET',
        dataType:'json',
        token:true
    },
    // 请求 返回promise
    request(options = {}){
        // 组织参数
        options.url = this.common.baseUrl + options.url
        options.header = options.header || this.common.header
        options.data = options.data || this.common.data
        options.method = options.method || this.common.method
        options.dataType = options.dataType || this.common.dataType
        options.token = options.token === false ?  false : this.common.token
        // 请求之前验证...
        // token验证
        if (options.token) {
            let token = uni.getStorageSync('token')
            // 二次验证
            if (!token) {
                uni.showToast({ title: '请先登录', icon: 'none' });
                // token不存在时跳转
                return uni.reLaunch({
                    url: '/pages/common/login/login',
                });
            }
            // 往header头中添加token
            options.header.token = token
        }

        // 请求
        return new Promise((res,rej)=>{
            // 请求中...
            uni.request({
                ...options,
                success: (result) => {
                    // 返回原始数据
                    if(options.native){
                        return res(result)
                    }
                    // 服务端失败
                    if(result.statusCode !== 200){
                        if (options.toast !== false) {
                            uni.showToast({
                                title: result.data.data || '服务端失败',
                                icon: 'none'
                            });
                        }
                        return rej(result.data) 
                    }
					if(result.data.data == 'Token 令牌不合法!')
					{
						$store.dispatch('userlogout')
					}
                    // 其他验证...
                    // 成功
                    let data = result.data.data
                    res(data)
                },
                fail: (error) => {
                    uni.showToast({ title: error.errMsg || '请求失败', icon: 'none' });
                    return rej(error)
                }
            });
        })
    },
    // get请求
    get(url,data = {},options = {}){
        options.url = url
        options.data = data
        options.method = 'GET'
        return this.request(options)
    },
    // post请求
    post(url,data = {},options = {}){
        options.url = url
        options.data = data
        options.method = 'POST'
        return this.request(options)
    },
    // delete请求
    del(url,data = {},options = {}){
        options.url = url
        options.data = data
        options.method = 'DELETE'
        return this.request(options)
    },
	uploadfiles(data,onProgress=false)
	{
		return new Promise((reslove,reject)=>{
			let token = uni.getStorageSync('token');
			if(!token)
			{
				return uni.reLaunch({
					url:'/pages/loginandresign/login'
				})
			}
			let uploadtask = uni.uploadFile({
				url:config.baseurl+'/common/upload',
				header:{
					token
				},
				filePath:data,
				name:data.name||'files',
				success: (res) => {
					reslove(res)
				}
			})
			uploadtask.onProgressUpdate((res)=>{
				if(typeof(onProgress) == 'function')
				{
					onProgress(res.progress)
				}
			})
		})
	}
}