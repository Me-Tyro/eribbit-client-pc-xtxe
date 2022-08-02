<template>
  <!--    首页入口-->
  <div class="home-entry">
    <div class="container">
      <!--    左侧分类-->
      <home-category/>
      <!--    轮播图-->
      <home-banner />
    </div>
  </div>
  <!--  新鲜好物-->
  <!--  人气推荐-->
</template>

<script setup>
import HomeCategory from "@/views/home/components/home-category";
import HomeBanner from "@/views/home/components/home-banner";
</script>

<style scoped lang="less">

</style>
