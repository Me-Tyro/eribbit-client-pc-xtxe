<template>
  <div class='xtx-carousel' @mouseenter="stop" @mouseleave="start">
    <!--  图片容器  -->
    <ul class="carousel-body">
      <!-- fade 显示的图片加上-->
      <li class="carousel-item" v-for="(item, i) in props.sliders" :key="i" :class="{fade: index === i}">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <!-- 上一张-->
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)"><i class="iconfont icon-angle-left"></i></a>
    <!-- 下一张-->
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)"><i class="iconfont icon-angle-right"></i></a>
    <!-- 指示器-->
    <div class="carousel-indicator">
      <!-- active 激活点 -->
      <span v-for="(item, i) in props.sliders" :key="i" :class="{active: index === i}" @click="index = i"></span>
    </div>
  </div>
</template>

<script setup>
import {onUnmounted, ref, watch} from "vue";

const props = defineProps({
  // 轮播图数据
  sliders: {
    type: Array,
    default: () => {
      return []
    }
  },
  // 是否自动轮播
  autoPlay: {
    type: Boolean,
    default: false
  },
  // 间隔时长
  duration: {
    type: Number,
    default: 3000
  }
})

// 默认显示的图片的索引
const index = ref(0)

let timer = null

// 1. 自动轮播的逻辑
const autoPlayFn = () => {
  // 严谨：防止定时器重复添加
  clearInterval(timer)
  // 自动播放，每隔多久切换索引
  timer = setInterval(() => {
    index.value++
    if (index.value >= props.sliders.length) {
      index.value = 0
    }
  }, props.duration)
}

// 需要监听 sliders 数据变化，判断如果有数据且 autoplay 是 true
watch(() => props.sliders, (newVal) => {
  if (newVal.length && props.autoPlay) {
    console.log(newVal.length)
    autoPlayFn()
  }
  // immediate: true 是为了如果以后传过来的是静态数据，直接立即执行
}, {immediate: true})

// 2. 鼠标进入暂停，鼠标离开开启自动播放（有开启条件）
const stop = () => {
  if (timer) {
    clearInterval(timer)
  }
}
const start = () => {
  if (props.sliders.length && props.autoPlay) {
    autoPlayFn()
  }
}

// 3. 点击点点可以切换，上一张下一张
const toggle = (step) => {
  // 将要改变的索引
  const newVal = index.value + step
  // 超出的情况，太大了
  if (newVal > (props.sliders.length - 1)) {
    index.value = 0
    return
  }
  // 超出的情况，太小了
  if (newVal < 0) {
    index.value = props.sliders.length - 1
    return
  }
  // 正常
  index.value = newVal
}

// 4. 组件卸载，清除定时器: 防止造成内存泄漏
onUnmounted(() => {
  clearInterval(timer)
})
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;

  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }

    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;

      &.fade {
        opacity: 1;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;

      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;

        ~ span {
          margin-left: 12px;
        }

        &.active {
          background: #fff;
        }
      }
    }

    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, .2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }
  }

  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
