<!--
 * @Author: licl
 * @Date: 2022-06-26 19:25:34
 * @LastEditTime: 2022-06-26 20:16:46
 * @LastEditors: licl
 * @Description:
-->
<script setup>
const padding = {
  title: 'padding',
  classNames: [
    'p-0',
    'p-1',
    'p-2',
    'p-3',
    'p-4',
    'p-none',
    'p',
    'p-xs',
    'p-sm',
    'p-lg',
    'p-xl',
    'p-2xl',
  ],
}

const margin = {
  title: 'margin',
  classNames: [
    'm',
    'm-0',
    'm-1',
    'm-2',
    'm-3',
    'm-4',
    'm-none',
    'm-xs',
    'm-sm',
    'm-md',
    'm-lg',
    'm-xl',
    'm-2xl',
  ],
}
</script>

<template>
  <view>
    <view class="p-2">
      <view class="text-2xl text-center mb-10">
        {{ padding.title }}
      </view>
      <view class="flex flex-wrap">
        <text v-for="(className, j) in padding.classNames" :key="j" :class="className" class="bg-green-100 mr-2 mb-2 center">
          {{ className }}
        </text>
      </view>
    </view>

    <view class="p-2">
      <view class="text-2xl text-center mb-10">
        {{ margin.title }}
      </view>
      <view class="flex flex-wrap">
        <text v-for="(className, j) in margin.classNames" :key="j" :class="className" class="bg-green-100 center">
          {{ className }}
        </text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
