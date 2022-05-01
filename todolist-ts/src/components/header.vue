<template>
  <div class="header">
    <input type="text" placeholder="请输入事件" v-model="todoMsg" />
    <button @click="add">添加</button>
  </div>
</template>

<script setup lang="ts">


import { ref } from "vue"
const todoMsg = ref<string>("")

type T = {
  msg: string,
  done: boolean
}
const emits = defineEmits(['update-todoMsg'])

// 添加数据的方法
const add = () => {
  if (todoMsg) {
    // 向父组件发起请求事件
    const obj:T = {
      msg: todoMsg.value,
      done: false
    }
    emits('update-todoMsg', obj)
    todoMsg.value = ''
  }
}

</script>

<style lang="scss" scoped>
</style>
