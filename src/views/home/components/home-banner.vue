<template>
  <div class="home-banner">
    <xtx-carousel auto-play :sliders="sliders"/>
  </div>
</template>

<script setup>
import {findBanner} from "@/api/home"
import {ref} from "vue"

const sliders = ref([])

findBanner().then(data => {
  // console.log(data)
  sliders.value = data.result
})

</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}

/*覆盖样式*/
.xtx-carousel {
  ::v-deep(.carousel-btn.prev) {
    left: 270px;
  }

  ::v-deep(.carousel-indicator) {
    padding-left: 250px;
  }
}
</style>
