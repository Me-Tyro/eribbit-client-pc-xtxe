// 扩展vue原有的功能：全局组件、自定义指令、挂载原型方法，注意：没有全局过滤器
// 这就是组件
// vue2.0 插件写法要素：导出一个对象，有 install 函数，默认传入了 Vue 构造函数，Vue基础之上扩展
// vue3.0 插件写法要素：导出一个对象，有 install 函数，默认传入了 app 应用实例，app基础之上扩展

// 1.导入想要封装的组件
import xtxSkeleton from "@/components/library/xtx-skeleton.vue"
import xtxCarousel from "@/components/library/xtx-carousel";

// 2. 调用 Vue 方法，对该组件进行全局插件的注册
export default {
  install(app) {
    // 在 app 上进行扩展，app提供 component directive 函数
    // 如果要挂载原型，app.config.globalProperties 方法

    // 3. 前面的 第一个 参数 是我们自己取的名字（name: 'xxx'）,第二个 参数 为导入的组件名称
    app.component('XtxSkeleton', xtxSkeleton)
    app.component('xtxCarousel', xtxCarousel)
  }
}
