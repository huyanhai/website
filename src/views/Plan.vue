<template>
  <div class="plan">
    <template v-if="width > 1200">
      <swiper @init="load" :direction="'vertical'" class="swiper-box" :mousewheel="true" :modules="[Mousewheel]" v-on:slide-change="onSlideChange">
        <swiper-slide class="plan-1">
          <div class="container" v-if="swiperIndex === 0">
            <div class="step1">
              <h3 class="title animate__animated animate__fadeInDown">“知识产权”小微金融生命体系</h3>
              <div class="box">
                <div class="anim-b">
                  <img class="r a-icon" src="@/assets/plan-s1-2.png" alt="" />
                  <img class="s animate__animated animate__zoomIn" src="@/assets/plan-s1-1.png" alt="" srcset="" />
                  <span class="t t1 animate__animated a-icon2 animate__delay-1-1">全生命周期<br />多元产品体系</span>
                  <span class="t t2 animate__animated a-icon3 animate__delay-1-2">以知识产权客群为<br />中心的运营体系</span>
                  <span class="t t3 animate__animated a-icon3 animate__delay-1-3">高效率、高标准<br />高质量交付</span>
                  <span class="t t4 animate__animated a-icon3 animate__delay-1-4">数字化“知产质押融资”<br />创新体系</span>
                  <span class="t t5 animate__animated a-icon3 animate__delay-1-5">数据信贷的风险识<br />别与量化风控体系</span>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="plan-2">
          <div class="container" v-if="swiperIndex === 1">
            <div class="step2 animate__animated animate__fadeInDown">
              <h3 class="title">“知识产权质押融资”数字化赋能平台</h3>
              <div class="items">
                <div class="item" v-for="(item, index) in list" :key="index">
                  <img :src="item.icon" alt="" srcset="" />
                  <span>{{ item.text }}</span>
                  <p>{{ item.desc }}</p>
                </div>
              </div>
            </div>
            <div class="step3 animate__animated animate__fadeInDown animate__delay-1">
              <h3 class="title">业务中台架构与管理</h3>
              <div class="items">
                <img class="animate__animated animate__zoomIn animate__delay-2" src="@/assets/plan-s3-1.png" alt="" srcset="" />
                <span class="t t1 animate__animated animate__fadeInDown6 animate__delay-2-1">产品运营<br />监控管理</span>
                <span class="t t2 animate__animated animate__fadeInDown6 animate__delay-2-2">产品设计<br />定义与管理</span>
                <span class="t t3 animate__animated animate__fadeInDown6 animate__delay-2-3">客户<br />分析与管理</span>
                <span class="t t4 animate__animated animate__fadeInDown6 animate__delay-2-4">营销管理<br />决策审核<br />与审批<br />贷后管理</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="plan-3">
          <div class="container" v-if="swiperIndex === 2">
            <div class="step4 animate__animated animate__fadeInDown">
              <h3 class="title">“Cornerstone·基石”业务</h3>
              <div class="box">
                <img class="s1 animate__animated animate__zoomIn animate__delay-1" src="@/assets/plan-s4-1.png" alt="" />
                <img class="s2 a-icon1 animate__delay-1" src="@/assets/plan-s4-2.png" alt="" />
                <div class="icon animate__animated animate__fadeInDown6" :class="['animate__delay-2-' + (index + 1), 'i' + (index + 1)]" v-for="(item, index) in list1" :key="index">
                  <img :src="item.icon" />
                  <p>{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
          <user-footer />
        </swiper-slide>
      </swiper>
      <div class="scroll animate__animated animate__fadeInDown animate__infinite" style="animation-duration: 2s" v-if="swiperIndex < 2">
        <img src="@/assets/plan-scroll.png" alt="" srcset="" />
        <p>向下滑动</p>
      </div>
    </template>
    <template v-else>
      <div class="container">
        <div class="step1">
          <h3 class="title animate__animated animate__fadeInDown">“知识产权”小微金融生命体系</h3>
          <div class="box">
            <div class="anim-b">
              <img class="r a-icon" src="@/assets/plan-s1-2.png" alt="" />
              <img class="s animate__animated animate__zoomIn" src="@/assets/plan-s1-1.png" alt="" srcset="" />
              <span class="t t1 animate__animated a-icon2 animate__delay-1-1">全生命周期<br />多元产品体系</span>
              <span class="t t2 animate__animated a-icon3 animate__delay-1-2">以知识产权<br />客群为中心<br />的运营体系</span>
              <span class="t t3 animate__animated a-icon3 animate__delay-1-3">高效率、高标准<br />高质量交付</span>
              <span class="t t4 animate__animated a-icon3 animate__delay-1-4">数字化“知产质<br />押融资”创新体系</span>
              <span class="t t5 animate__animated a-icon3 animate__delay-1-5">数据信贷的<br />风险识别与<br />量化风控体<br />系</span>
            </div>
          </div>
        </div>
        <div class="step2 animate__animated animate__fadeInDown">
          <h3 class="title">“知识产权质押融资”数字化赋能平台</h3>
          <div class="items">
            <div class="item" v-for="(item, index) in list" :key="index">
              <img :src="item.icon" alt="" srcset="" />
              <span>{{ item.text }}</span>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <div class="step3 animate__animated animate__fadeInDown animate__delay-1">
          <img src="@/assets/pm-c1.png" alt="" srcset="" />
        </div>
        <div class="step4 animate__animated animate__fadeInDown animate__delay-1">
          <img src="@/assets/pm-c2.png" alt="" srcset="" />
        </div>
        <user-footer style="position: initial !important" />
      </div>
    </template>
  </div>
</template>
<script setup>
import UserFooter from "@/components/Footer.vue";
import s1 from "@/assets/plan-s2-1.png";
import s2 from "@/assets/plan-s2-2.png";
import s3 from "@/assets/plan-s2-3.png";

import c1 from "@/assets/plan-s4-31.png";
import c2 from "@/assets/plan-s4-32.png";
import c3 from "@/assets/plan-s4-33.png";
import c4 from "@/assets/plan-s4-34.png";
import c5 from "@/assets/plan-s4-35.png";

import { ref } from "vue";
import { Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useWindowSize } from "@vueuse/core";

import "swiper/css";
import "swiper/css/effect-fade";
const { width, height } = useWindowSize();

const list = ref([
  {
    text: "管理敏捷",
    desc: "Management agility",
    icon: s1,
  },
  {
    text: "业务敏捷",
    desc: "Business agility",
    icon: s2,
  },
  {
    text: "运营敏捷",
    desc: "Operational agility",
    icon: s3,
  },
]);

const list1 = ref([
  {
    text: "指标库",
    icon: c1,
  },
  {
    text: "标签库",
    icon: c2,
  },
  {
    text: "流程解决方案",
    icon: c3,
  },
  {
    text: "模型库",
    icon: c4,
  },
  {
    text: "策略解决方案",
    icon: c5,
  },
]);

const swiperDom = ref({});
const swiperIndex = ref(0);

const load = (e) => {
  swiperDom.value = e;
  swiperIndex.value = swiperDom.value?.activeIndex;
};

const onSlideChange = () => {
  swiperIndex.value = swiperDom.value?.activeIndex;
};
</script>

<style lang="scss" scoped>
.a-icon {
  animation: animal 10s infinite linear;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
}
.a-icon1 {
  animation: animal1 1s linear forwards;
}

.a-icon2 {
  animation-name: animal2;
}

.a-icon3 {
  animation-name: animal3;
}

.plan-1 {
  background: url("@/assets/plan-bg1.png") no-repeat;
  background-size: cover;
}
.plan-2 {
  background: url("@/assets/plan-bg2.png") no-repeat;
  background-size: cover;
}
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
    color: #fff;
    display: block;
    width: 50px;
  }
}

.plan {
  background: url("@/assets/plan-bg.png") no-repeat #0054ff center bottom;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  .container {
    .step1 {
      padding-top: 160px;
      text-align: center;
      .title {
        font-size: 32px;
        color: #fff;
        margin-bottom: 70px;
      }
      .box {
        position: relative;
        .anim-b {
          position: relative;
          width: 456px;
          height: 446px;
          margin: 0 auto;
          .r {
            width: 460px;
            height: 460px;
          }
          .s {
            width: 246px;
            height: 234px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -120px;
            margin-left: -123px;
          }
          .t {
            position: absolute;
            display: block;
            color: #fff;
            line-height: 28px;
            font-size: 16px;
            &.t1 {
              top: -44px;
              left: 50%;
              transform: translateX(-50%);
            }
            &.t2 {
              top: 100px;
              right: -120px;
            }
            &.t3 {
              top: 400px;
              right: -40px;
            }
            &.t4 {
              top: 400px;
              left: -40px;
            }
            &.t5 {
              top: 100px;
              left: -150px;
            }
          }
        }
      }
    }
    .step2 {
      max-width: 1200px;
      margin: 82px auto 50px auto;
      height: 235px;
      text-align: center;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(7px);
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .title {
        color: #2777ff;
        font-size: 28px;
        margin-bottom: 26px;
        padding-top: 42px;
      }
      .items {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 300px;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 44px;
            height: 44px;
            margin-bottom: 8px;
          }
          span {
            color: #333333;
            font-size: 20px;
          }
          p {
            font-size: 10px;
            color: #999999;
          }
        }
      }
    }
    .step3 {
      max-width: 1200px;
      margin: 0 auto;
      height: 467px;
      text-align: center;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(7px);
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .title {
        color: #2777ff;
        font-size: 28px;
        margin-bottom: 36px;
        padding-top: 42px;
      }
      .items {
        width: 823px;
        height: 301px;
        margin: 0 auto;
        position: relative;
        img {
          width: 100%;
        }
        .t {
          position: absolute;
          font-size: 18px;
          line-height: 28px;
          &.t1 {
            left: 33px;
            top: 91px;
            color: #755ff9;
          }
          &.t2 {
            left: 248px;
            top: 186px;
            color: #4e72ff;
          }
          &.t3 {
            top: 66px;
            left: 440px;
            color: #0cd7ff;
          }
          &.t4 {
            right: 25px;
            top: 132px;
            color: #22d9fe;
          }
        }
      }
    }
    .step4 {
      max-width: 1200px;
      margin: 80px auto;
      height: 574px;
      text-align: center;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(12px);
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .title {
        color: #2777ff;
        font-size: 28px;
        margin-bottom: 36px;
        padding-top: 42px;
      }
      .box {
        position: relative;
        width: 829px;
        height: 214px;
        margin: 120px auto 0 auto;
        .s1 {
          width: 100%;
        }
        .s2 {
          position: absolute;
          width: 650px;
          height: 242px;
          left: 50%;
          margin-left: -325px;
          top: -60px;
          opacity: 0;
        }
        .icon {
          position: absolute;
          img {
            width: 62px;
            height: 62px;
          }
          p {
            color: #666666;
            font-size: 18px;
          }
          &.i1 {
            top: -84px;
            left: 144px;
          }
          &.i2 {
            top: -84px;
            right: 148px;
          }
          &.i3 {
            top: 100px;
            right: 20px;
          }
          &.i4 {
            top: 180px;
            left: 45%;
          }
          &.i5 {
            top: 100px;
            left: 20px;
          }
        }
      }
    }
  }
}
</style>
