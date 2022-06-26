<script setup lang="ts">
const list = [
  { name: 'font', path: '/pages/font/index' },
  { name: 'size', path: '/pages/size/index' },
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
  justify-content: center;
  align-items: center;
}

.logo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 200rpx;
  margin-bottom: 50rpx;
  width: 200rpx;
  height: 200rpx;
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
