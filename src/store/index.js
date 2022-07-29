import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from "@/store/modules/cart";
import user from "@/store/modules/user";
import category from "@/store/modules/category";

// vue2.0 创建仓库 new Vuex.Store(({}))
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 默认存储在 localStorage
    createPersistedState({
      // 本地存储名字
      key: 'erabbit-client-pc-xtxe',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
