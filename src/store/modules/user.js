// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      id: '',
      avatar: '',
      nickname: '',
      account: '',
      mobile: '',
      token: ''
    }
  }
}
