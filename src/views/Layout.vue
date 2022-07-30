<template>
  <!--  顶部通栏-->
  <app-navbar/>
  <!--  头部组件-->
  <app-header />
  <!--  内容容器-->
  <div class="app-body">
    <!--二级路由-->
    <router-view/>
  </div>
  <!--  底部组件-->
  <app-footer />
</template>

<script setup>
import AppNavbar from "@/components/app-navbar";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";

</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
