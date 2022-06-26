<!--
 * @Author: licl
 * @Date: 2022-06-26 17:28:31
 * @LastEditTime: 2022-06-26 18:20:14
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
const size = {
  title: 'font-size',
  classNames: [
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-40',
    'text-xl',
    'text-2xl',
    'text-60',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
  ],
}

const bold = {
  title: 'font-bold',
  classNames: [
    'font-thin',
    'font-extralight',
    'font-light',
    'font-normal',
    'font-medium',
    'font-semibold',
    'font-bold',
    'font-extrabold',
    'font-black',
    'font-400',
    'font-600',
  ],
}

const letter = {
  title: 'letter-spacing',
  classNames: [
    'tracking-tighter',
    'tracking-tight',
    'tracking-normal',
    'tracking-wide',
    'tracking-wider',
    'tracking-widest',
    'tracking-5px',
    'tracking-5rpx',
  ],
}

const line = {
  title: 'line-height',
  classNames: [
    'leading-none',
    'leading-tight',
    'leading-snug',
    'leading-normal',
    'leading-relaxed',
    'leading-loose',
  ],
}

const align = {
  title: 'text-align',
  classNames: [
    'text-left',
    'text-center',
    'text-right',
  ],
}

const color = {
  title: 'text-color',
  classNames: [
    'text-transparent',
    'text-gray-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
    'text-green-500',
    'text-gray-500_50',
    'text-red-500_50',
    'text-yellow-500_50',
    'text-blue-500_50',
    'text-green-500_50',
  ],
}

const decoration = {
  title: 'text-decoration',
  classNames: [
    'overline',
    'underline',
    'line-through',
    'no-underline',
    'decoration-solid',
    'no-underline',
    'no-underline',
  ],
}

const decorationStyle = {
  title: 'text-decoration-style',
  classNames: [
    'underline decoration-solid',
    'underline decoration-double',
    'underline decoration-dotted',
    'underline decoration-dashed',
    'underline decoration-wavy',
  ],
}

const indent = {
  title: 'text-indent',
  classNames: [
    'indent',
    'indent-2em',
    'indent-32rpx',
    'indent-xs',
    'indent-sm',
    'indent-md',
    'indent-lg',
    'indent-xl',
    'indent-2xl',
    'indent-3xl',
    '-indent-xs',
    '-indent-5rpx',
  ],
}

const opacity = {
  title: 'text-opacity',
  classNames: [
    'text-black text-opacity-0',
    'text-black text-opacity-5',
    'text-black text-opacity-10',
    'text-black text-opacity-20',
    'text-black text-opacity-30',
    'text-black text-opacity-40',
    'text-black text-opacity-50',
    'text-black text-opacity-60',
    'text-black text-opacity-70',
    'text-black text-opacity-80',
    'text-black text-opacity-90',
    'text-black text-opacity-100',
  ],
}

const shadow = {
  title: 'text-shadow',
  classNames: [
    'text-shadow',
    'text-shadow-sm',
    'text-shadow-md',
    'text-shadow-lg',
    'text-shadow-xl',
    'text-shadow-none',
  ],
}

const list = [bold, letter, line, align, color, decoration, decorationStyle, indent, opacity, shadow, size]
</script>

<template>
  <view>
    <view v-for="(item, i) in list" :key="i" class="p-2">
      <view class="text-2xl text-center my-3">
        {{ item.title }}
      </view>
      <view v-for="(className, j) in item.classNames" :key="j" :class="className">
        {{ className }}
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
