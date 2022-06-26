<!--
 * @Author: licl
 * @Date: 2022-06-26 17:28:31
 * @LastEditTime: 2022-06-26 19:21:55
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
const radius = {
  title: 'border-radius',
  classNames: [
    'rounded-none',
    'rounded-sm',
    'rounded',
    'rounded-md',
    'rounded-lg',
    'rounded-xl',
    'rounded-2xl',
    'rounded-3xl',
    'rounded-1_2',
    'rounded-full',
  ],
}

const width = {
  title: 'border-width',
  classNames: [
    'border-0',
    'border',
    'border-base',
    'border-2',
    'border-4',
    'border-6',
    'border-8',
    'border-10',
  ],
}

const style = {
  title: 'border-style',
  classNames: [
    'border-none',
    'border-solid',
    'border-dashed',
    'border-dotted',
    'border-double',
  ],
}

const color = {
  title: 'border-style',
  classNames: [
    'border-transparent border-4',
    'border-gray-500 border-4',
    'border-red-500 border-4',
    'border-yellow-500 border-4',
    'border-blue-500 border-4',
    'border-green-500 border-4',
    'border-gray-500_20 border-4',
    'border-red-500_20 border-4',
    'border-yellow-500_20 border-4',
    'border-blue-500_20 border-4',
    'border-green-500_20 border-4',
  ],
}

const list = [width, radius, style, color]
</script>

<template>
  <view class="bg-white">
    <view v-for="(item, i) in list" :key="i" class="p-2">
      <view class="text-2xl text-center my-3">
        {{ item.title }}
      </view>
      <view class="flex flex-col items-center">
        <view v-for="(className, j) in item.classNames" :key="j" :class="className" class="w-half h-200 mb-3  bg-blue-100 center text-center">
          {{ className }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
