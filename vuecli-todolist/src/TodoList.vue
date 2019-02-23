<template>
  <div>
    <div>
      <input v-model="inputValue">
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <!--- content 绑定值 item
      index 绑定值 item
      --->
      <todo-item
        v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete"
      ></todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
  // 也可以使用传统的 components:["TodoItem"]
  components: {
    'todo-item': TodoItem
  },
  // 这是 ES6 的新语法，相当于：
  // data : function () {}
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelete (index) {
      // 参数从子组件 emit 过来
      this.list.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
