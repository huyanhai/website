<script setup>
import UserHeader from "@/components/Header.vue";
import { provide, ref } from "vue";

const headerActive = ref(false);

provide("headerActive", headerActive);
</script>

<template>
  <user-header />
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  border: 0;
  padding: 0;
}
:root {
  --animate-delay: 0.1s !important;
}

.animate__delay-1 {
  animation-delay: 1s !important;
}
.animate__delay-1-1 {
  animation-delay: 1.1s !important;
}
.animate__delay-1-2 {
  animation-delay: 1.2s !important;
}
.animate__delay-1-3 {
  animation-delay: 1.3s !important;
}
.animate__delay-1-4 {
  animation-delay: 1.4s !important;
}
.animate__delay-1-5 {
  animation-delay: 1.5s !important;
}
.animate__delay-1-6 {
  animation-delay: 2s !important;
}

.animate__delay-2 {
  animation-delay: 2s !important;
}
.animate__delay-2-1 {
  animation-delay: 2.1s !important;
}
.animate__delay-2-2 {
  animation-delay: 2.2s !important;
}
.animate__delay-2-3 {
  animation-delay: 2.3s !important;
}
.animate__delay-2-4 {
  animation-delay: 2.4s !important;
}
.animate__delay-2-5 {
  animation-delay: 2.5s !important;
}
.animate__delay-2-6 {
  animation-delay: 3s !important;
}

.animate__delay-3 {
  animation-delay: 3s !important;
}
.animate__delay-3-1 {
  animation-delay: 3.1s !important;
}
.animate__delay-3-2 {
  animation-delay: 3.2s !important;
}
.animate__delay-3-3 {
  animation-delay: 3.3s !important;
}
.animate__delay-3-4 {
  animation-delay: 3.4s !important;
}
.animate__delay-4 {
  animation-delay: 4s !important;
}

@keyframes animal3 {
  0% {
    transform: translate3d(-0%, -50%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(-0%, 0%, 0);
    opacity: 1;
  }
}

@keyframes animal2 {
  0% {
    transform: translate3d(-50%, -50%, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(-50%, 0%, 0);
    opacity: 1;
  }
}

@keyframes animal1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes animal {
  0% {
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}

html,
body {
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.swiper-box {
  width: 100%;
  height: 100%;
}

li {
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
}
</style>
