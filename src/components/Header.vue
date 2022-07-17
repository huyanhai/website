<template>
  <header class="header" :class="headerActive ? 'active' : ''">
    <main class="main">
      <a class="logo">
        <img src="@/assets/logo.png" alt="" srcset="" />
      </a>
      <ul @mouseout="mouseout">
        <li
          v-for="(item, index) in links"
          :key="index"
          @click="
            active = index;
            $router.push(item.link);
          "
          @mouseover="mouseover(index)"
        >
          <a :class="{ active: area === index }">
            <p>{{ item.text }}</p>
          </a>
        </li>
        <i class="area" :style="{ left: area * 140 + 'px' }"></i>
      </ul>
    </main>
  </header>
</template>
<script setup>
import { watch, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useWindowScroll } from "@vueuse/core";
const links = ref([
  {
    text: "首页",
    link: "/",
  },
  {
    text: "解决方案",
    link: "/plan",
  },
  {
    text: "企业服务",
    link: "/servers",
  },
  {
    text: "战略伙伴",
    link: "/partner",
  },
  {
    text: "关于我们",
    link: "/about",
  },
  {
    text: "联系我们",
    link: "/call",
  },
]);

const active = ref();

const area = ref();

const router = useRouter();
const { x, y } = useWindowScroll();
const headerActive = inject("headerActive");

const mouseover = (index) => {
  area.value = index;
};

const mouseout = () => {
  area.value = active.value;
};

watch(
  () => router.currentRoute.value.path,
  (newValue, oldValue) => {
    headerActive.value = false;
    switch (newValue) {
      case "/plan":
        active.value = 1;
        break;
      case "/servers":
        active.value = 2;
        break;
      case "/partner":
        active.value = 3;
        break;
      case "/about":
        active.value = 4;
        break;
      case "/call":
        active.value = 5;
        break;
      default:
        active.value = 0;
        break;
    }
  },
  { immediate: true }
);

watch(active, (val) => {
  area.value = val;
});
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  &.active {
    background: #0054ff;
  }
  .main {
    margin: 0 auto;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: block;
      overflow: hidden;
      img {
        width: 120px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      position: relative;
      .area {
        display: block;
        width: 142px;
        height: 60px;
        position: absolute;
        backdrop-filter: blur(7px);
        background: rgba($color: #fff, $alpha: 0.8);
        left: 0;
        transition: all 0.3s;
        box-shadow: 0 2px 10px rgba($color: #000000, $alpha: 0.2);
      }
      li {
        font-size: 12px;
        color: #fff;
        width: 140px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        cursor: pointer;
        position: relative;
        &.hide {
          &::after {
            display: none;
          }
        }
        &:first-child {
          &::after {
            display: none;
          }
        }
        a {
          position: relative;
          display: block;
          width: 100%;
          height: 60px;
          line-height: 60px;
          font-size: 14px;
          transition: all 0.3s;
          p {
            position: relative;
            z-index: 1;
          }
          &.active {
            color: #2777ff;
            font-size: 16px;
            font-weight: bold;
          }
        }
        &::after {
          display: block;
          position: absolute;
          height: 20px;
          width: 1px;
          content: "";
          background: #fff;
          top: 50%;
          left: 0px;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
