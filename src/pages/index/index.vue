<script setup lang="ts">
import { ref } from 'vue'

const list = [
  { name: 'font', path: '/pages/font/index' },
  { name: 'font', path: '/pages/font/index' },
  { name: 'font', path: '/pages/font/index' },
  { name: 'font', path: '/pages/font/index' },
]

const to = (to: string) => {
  uni.navigateTo({
    url: to,
  })
}
</script>

<template>
  <view class="grid grid-cols-3 justify-items-center">
    <view v-for="(item, index) in list" :key="index" class="w-200 h-200 shadow-md flex justify-center items-center rounded-md" @click="to(item.path)">
      {{ item.name }}
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
