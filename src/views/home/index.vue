<template>
  <!--    首页入口-->
  <div class="home-entry">
    <div class="container">
      <!--    左侧分类-->
      <home-category/>
      <!--    轮播图-->
      <home-banner/>
    </div>
  </div>
  <!--  新鲜好物-->
  <home-new/>
  <!--  人气推荐-->
  <home-hot/>
</template>

<script setup>
import HomeCategory from "@/views/home/components/home-category";
import HomeBanner from "@/views/home/components/home-banner";
import HomeNew from "@/views/home/components/home-new";
import HomeHot from "@/views/home/components/home-hot";
import {ref} from "vue";

const show = ref(true)
</script>

<style scoped lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}

.v-enter-from {
  opacity: 0;
}

.v-enter-active {
  transition: all 2s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: all 2s;
}

.v-leave-to {
  opacity: 0;
}

.h-enter-from {
  height: 0px;
}

.h-enter-active {
  transition: all 2s;
}

.h-enter-to {
  height: 200px;
}

.h-leave-from {
  height: 200px;
}

.h-leave-active {
  transition: all 2s;
}

.h-leave-to {
  height: 0px;
}
</style>
