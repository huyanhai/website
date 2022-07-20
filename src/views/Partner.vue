<template>
  <div class="partner">
    <template v-if="width > 1200">
      <swiper @init="load" :direction="'vertical'" class="swiper-box" :mousewheel="true" :modules="[Mousewheel]" v-on:slide-change="onSlideChange">
        <swiper-slide>
          <div class="step1">
            <div class="container" v-if="swiperIndex === 0">
              <img class="img-title animate__animated animate__fadeInDown" src="@/assets/par-2.png" alt="" srcset="" />
              <div class="server">
                <img class="bg" src="@/assets/par-3.png" alt="" />
                <img class="s-title animate__animated animate__fadeInDown animate__delay-1s" src="@/assets/par-4.png" alt="" srcset="" />
                <img class="s-more" src="@/assets/par-5.png" alt="" srcset="" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="container" v-if="swiperIndex === 1">
            <div class="partners">
              <img class="bg" src="@/assets/par-6.png" alt="" />
              <img class="p-title animate__animated animate__fadeInDown" data--duration="3s" src="@/assets/par-7.png" alt="" srcset="" />
              <img class="p-more" src="@/assets/par-8.png" alt="" srcset="" />
            </div>
          </div>
          <user-footer />
        </swiper-slide>
      </swiper>
      <div class="scroll animate__animated animate__fadeInDown animate__infinite" style="animation-duration: 2s" v-if="swiperIndex < 1">
        <img src="@/assets/plan-scroll1.png" alt="" srcset="" />
        <p>向下滑动</p>
      </div>
    </template>
    <template v-else>
      <div class="step1">
        <div class="container" v-if="swiperIndex === 0">
          <img class="img-title animate__animated animate__fadeInDown" src="@/assets/par-2.png" alt="" srcset="" />
          <div class="server">
            <img class="bg" src="@/assets/par-3.png" alt="" />
            <img class="s-title animate__animated animate__fadeInDown animate__delay-1s" src="@/assets/par-4.png" alt="" srcset="" />
            <img class="s-more" src="@/assets/par-5.png" alt="" srcset="" />
          </div>
        </div>
      </div>
      <div class="partners">
        <img class="bg" src="@/assets/par-6.png" alt="" />
        <img class="p-title animate__animated animate__fadeInDown" data--duration="3s" src="@/assets/par-7.png" alt="" srcset="" />
        <img class="p-more" src="@/assets/par-8.png" alt="" srcset="" />
      </div>
      <user-footer />
    </template>
  </div>
</template>
<script setup>
import UserFooter from "@/components/Footer.vue";
import { ref, inject } from "vue";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();

const swiperDom = ref({});
const swiperIndex = ref(0);
const headerActive = inject("headerActive");

const load = (e) => {
  swiperDom.value = e;
  swiperIndex.value = swiperDom.value?.activeIndex;
};

const onSlideChange = () => {
  swiperIndex.value = swiperDom.value?.activeIndex;
  if (swiperIndex.value === 1) {
    headerActive.value = true;
  } else {
    headerActive.value = false;
  }
};
</script>

<style lang="scss" scoped>
.partner {
  height: 100%;
  position: relative;
  .scroll {
    width: 35px;
    margin: 0 auto 0 auto;
    position: absolute;
    z-index: 100;
    bottom: 20px;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -17.5px;
    img {
      width: 100%;
    }
    p {
      font-size: 12px;
      color: #2777ff;
      display: block;
      width: 50px;
    }
  }
  .step1 {
    background: url("@/assets/par-1.png") no-repeat center top;
    background-size: auto 400px;
    height: 100%;
  }
  .container {
    max-width: 1250px;
    margin: 0 auto;
    .img-title {
      width: 280px;
      height: 117px;
      margin-top: 80px;
      margin-left: 119px;
    }
    .server {
      width: 100%;
      position: relative;
      .bg {
        width: 100%;
      }
      .s-title {
        position: absolute;
        left: 50%;
        width: 279px;
        height: 54px;
        top: 14%;
        margin-left: -138px;
      }
      .s-more {
        width: 1080px;
        height: 432px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 28%;
      }
    }
    .partners {
      width: 100%;
      position: relative;
      padding-top: 50px;
      .bg {
        width: 100%;
      }
      .p-title {
        position: absolute;
        left: 50%;
        margin-left: -105px;
        width: 211px;
        height: 54px;
        top: 14%;
      }
      .p-more {
        width: 1030px;
        height: 368px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 30%;
      }
    }
  }
}
</style>
