<template>
  <div v-if="lists.length">
    <span>全选</span>
    <input type="checkbox" v-model="isAllDone" />
    <span>{{ hasDone }} / {{ lists.length }}</span>
    <button @click="clearIsDone">清空完成内容</button>
  </div>
  <div v-else>
    <span>无内容</span>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'
const props = defineProps<{
  lists: Array<any>
}>()

const emits = defineEmits(["checkAllTotal", "clearAllTotal"])
const hasDone = props.lists.reduce((pre,todo) =>  pre + (todo.done ? 1 : 0) ,0)

const isAllDone = computed<boolean>({
  get() {
    return hasDone.value === props.lists.length
  },
  set(val: boolean) {
    emits('checkAllTotal', val)
  }
})

const clearIsDone = () => {
  emits('clearAllTotal')
}

</script>

<style scoped>
</style>
