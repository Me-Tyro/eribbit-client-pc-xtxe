<template>
  <router-view />
</template>

<script setup>
import request from "@/utils/request";

const fn = () => {
  // 测试请求
  request('/member/profile', 'get', {a: 10})
}

</script>
