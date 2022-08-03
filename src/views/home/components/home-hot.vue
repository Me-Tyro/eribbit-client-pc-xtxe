<template>
  <div class="home-hot">
    <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
      <Transition name="fade">
        <ul v-if="list.length" ref="pannel" class="goods-list">
          <li v-for="item in list" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="">
              <p class="name">{{ item.title }}</p>
              <p class="desc">{{ item.alt }}</p>
            </RouterLink>
          </li>
        </ul>
        <home-skeleton v-else/>
      </Transition>
    </HomePanel>
  </div>
</template>

<script setup>
import HomePanel from '@/views/home/components/home-panel'
import {findHot} from "@/api/home"
import {ref} from "vue";
import HomeSkeleton from "@/views/home/components/home-skeleton";

const list = ref([])
findHot().then(data => {
  // console.log(data)
  list.value = data.result
})
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;
    .hoverShadow();

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
