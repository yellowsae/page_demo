<script setup lang="ts">
import myHeader from './components/header.vue'
import list from './components/list.vue'
import myFooter from './components/footer.vue'
import { ref, computed } from 'vue'
import PubSub from 'pubsub-js'

interface TodoItem {
  msg: string
  done: boolean
}


const lists = ref<TodoItem[]>([
  { msg: "事件1", done: false },
  { msg: "事件2", done: true },
  { msg: "事件3", done: false },
])
// const hasDone = computed(() => lists.value.filter(item => item.done).length) // done 为true的长度

// const isAllDone = computed<boolean>({
//   get() {
//     return hasDone.value === lists.value.length
//   },
//   set(val: boolean) {
//     lists.value.forEach(item => {
//       item.done = val
//     })
//   }
// })


// 全选
const checkAllTotal = (value:boolean) => {
  lists.value.forEach(item => item.done = value)
}

// 清空
const clearAllTotal = () => {
  lists.value = lists.value.filter(item => !item.done)
}

const addList = (value: TodoItem) => {
  lists.value.push(value)
}


PubSub.subscribe('deleteItem', (msg:string, index:number) => {
  lists.value.splice(index, 1);
})

</script>

<template>
  <div class="container">
    <myHeader @update-todoMsg="addList"></myHeader>
    <list :lists="lists"></list>
    <myFooter  @checkAllTotal='checkAllTotal' @clearAllTotal='clearAllTotal' :lists="lists"></myFooter>
  </div>
</template>

<style lang="scss" scoped>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
}
</style>
