<!--
 * @Author: licl
 * @Date: 2022-06-26 18:58:46
 * @LastEditTime: 2022-06-26 19:03:32
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
const shadow = {
  title: 'shadow',
  classNames: [
    'shadow-none',
    'shadow',
    'shadow-sm',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'shadow-2xl',
    'shadow-inner',
  ],
}
</script>

<template>
  <div>
    <view class="p-2 bg-gray-100">
      <view class="text-2xl text-center my-3">
        {{ shadow.title }}
      </view>
      <view v-for="(className, j) in shadow.classNames" :key="j" :class="className" class="h-200 mb3 bg-white center">
        {{ className }}
      </view>
    </view>
  </div>
</template>

<style scoped>

</style>
