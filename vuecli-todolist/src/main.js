// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 这里也就是 import TodoList from './TodoList.vue'
// 引入 TodoList 组件
import TodoList from './TodoList'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // Vue 注入到 ../index.html 的 app 元素
  el: '#app',
  // components: {App : App} 的简写
  // 引入组件 App
  components: {
    TodoList
  },
  // 表面模板就是 App 的内容
  template: '<TodoList/>'
})
