<template>
  <li>
    <label>
      <input type="checkbox" v-model="todoDone" />
      <span>{{todoItem}}</span>
      <button @click="deleteItem(keyIndex)">删除</button>
    </label>
  </li>
</template>

<script setup lang="ts">
// 提供数据
import PubSub from 'pubsub-js'

const props = defineProps<{
  todoItem: string
  todoDone: boolean
  keyIndex: number
}>()


const deleteItem = (value: number) => {
  PubSub.publish('deleteItem', value)
}
</script>

<style scoped>

li {
  list-style: none;
}

</style>
