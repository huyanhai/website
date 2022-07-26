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
                <div class="fuwu-box">
                  <div class="box">
                    <div class="item" v-for="(item, index) in lines" :key="index">
                      <img class="line" :src="item.img" alt="" :class="`animate__delay-1-${index + 1}`" />
                      <p class="num animate__animated animate__fadeIn" :class="`animate__delay-1-${index + 1}`">{{ item.num }}</p>
                      <p class="name animate__animated animate__fadeIn" :class="`animate__delay-1-${index + 1}`">{{ item.name }}</p>
                    </div>
                  </div>
                  <div class="lines-bg animate__animated animate__fadeIn animate__delay-1s"></div>
                </div>
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

import zz1 from "@/assets/zz1.png";
import zz2 from "@/assets/zz2.png";
import zz3 from "@/assets/zz3.png";
import zz4 from "@/assets/zz4.png";
import zz5 from "@/assets/zz5.png";
import zz6 from "@/assets/zz6.png";

const { width, height } = useWindowSize();

const swiperDom = ref({});
const swiperIndex = ref(0);
const headerActive = inject("headerActive");

const lines = ref([
  {
    img: zz1,
    num: "5066家",
    name: "高新技术企业",
  },
  {
    img: zz2,
    num: "2365家",
    name: "专精特新",
  },
  {
    img: zz3,
    num: "38031家",
    name: "科技型企业",
  },
  {
    img: zz4,
    num: "118家",
    name: "小巨人",
  },
  {
    img: zz5,
    num: "1014家",
    name: "企业技术中心",
  },
  {
    img: zz6,
    num: "179家",
    name: "新型研发机构",
  },
]);

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
@keyframes row {
  0% {
    transform: scaleY(0);
    transform-origin: center bottom;
  }
  100% {
    transform: scaleY(1);
    transform-origin: center bottom;
  }
}
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
    .fuwu-box {
      width: 989px;
      height: 314px;
      position: absolute;
      top: 28%;
      left: 50%;
      transform: translateX(-50%);
      .lines-bg {
        display: block;
        position: absolute;
        width: 989px;
        height: 39px;
        background: url("@/assets/jiange.png") no-repeat;
        background-size: cover;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        z-index: 1;
      }
      .box {
        position: relative;
        height: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 80%;
        align-items: flex-end;

        .item {
          width: 54px;
          position: relative;
          z-index: 2;
          .line {
            width: 100%;
            animation: row 0.5s linear forwards;
            // position: absolute;
            display: block;
            bottom: 80px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: center bottom;
          }
          &:nth-child(1) {
            height: 232px;
            .line {
            }
          }
          &:nth-child(2) {
            height: 164px;
            .line {
            }
          }
          &:nth-child(3) {
            height: 288px;
            .line {
            }
          }
          &:nth-child(4) {
            height: 44px;
            .line {
            }
          }
          &:nth-child(5) {
            height: 114px;
            .line {
            }
          }
          &:nth-child(6) {
            height: 74px;
            .line {
            }
          }
          .num {
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            word-break: keep-all;
            display: block;
          }
          .name {
            font-size: 18px;
            color: #ffffff;
            word-break: keep-all;
            position: absolute;
            bottom: -55px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
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
        width: 296px;
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
