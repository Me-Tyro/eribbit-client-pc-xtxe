// 1.创建新的axios实例
// 2. 请求拦截器，如果有token进行头部携带
// 3. 响应拦截器：1.剥离无效数据   2. 处理 token 失效
// 4. 导出一个函数，调用当前的 axios 实例发请求，返回值 promise

import axios from "axios";
import store from "@/store"
import router from "@/router"

// 导出基准地址，原因，其他地方不是通过 axios 发请求的地方用上基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  // axios 的一些配置，baseURL timeout
  baseURL,
  timeout: 500,
})

instance.interceptors.request.use(config => {
  // 拦截业务逻辑
  // 进行请求配置的修改
  // 如果本地有 token 就在头部请求

  // 1.获取用户信息登录
  const {profile} = store.state.user
  // 2. 判断是否有 token
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

// res => res.data 取出data数据，将来调用接口的时候直接拿到的就是后台数据
instance.interceptors.response.use(res => res.data, err => {
  // 401 状态码，进入该函数
  if (err.response && err.response.status === 401) {
    // 1. 清空无效用户信息
    // 2. 跳转到登录信息
    // 3. 跳转需要传参（当前路由地址）给登录页码
    store.commit('user/setUser', {})
    // 当前路由地址
    // 组件里头：'/user?a=10' $route.path === /user/  $route.fullPath === /user?a=10
    // js模块中：router.currentRoute.value.fullPath 就是当前路由地址，router.currentRoute 是 ref 响应式数据
    // encodeURIComponent js中内置 url 编码
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }

  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 1. 如果是get请求，需要使用 params 来传递 submitData            ?a=10&b=9
    // 2. 如果不是 get 请求，需要使用 data 来传递 submitData           请求体参数
    // [] 设置一个动态的key，写 js 表达式，js 表示式的执行结果当作KEY
    // toLowerCase() 转换为小写
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
