<template>
  <div>
    <Item 
      v-for="(item, index) of lists"
      :key="index"
      :todoItem="item.msg"
      :todoDone="item.done"
      :keyIndex="index"
      ></Item>
  </div>
</template>

<script lang="ts" setup>
import Item from './item.vue'

const props = defineProps<{
  lists: Array<any>
}>()

</script>

<style lang="scss" scoped>
</style>
