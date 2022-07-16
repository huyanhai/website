<template>
  <div class="plan">
    <swiper :direction="'vertical'" class="swiper-box" :mousewheel="true" :modules="[Mousewheel]" v-on:slide-change="onSlideChange">
      <swiper-slide>
        <div class="container">
          <div class="step1">
            <h3 class="title animate__animated animate__fadeInDown">“微生素”小微金融生命体系</h3>
            <div class="box">
              <div class="anim-b">
                <img class="r a-icon" src="@/assets/plan-s1-2.png" alt="" />
                <img class="s animate__animated animate__zoomIn" src="@/assets/plan-s1-1.png" alt="" srcset="" />
                <span class="t t1 animate__animated a-icon2 animate__delay-1-1">多元产品体系</span>
                <span class="t t2 animate__animated a-icon3 animate__delay-1-2">以客户为中心<br />的运营体系</span>
                <span class="t t3 animate__animated a-icon3 animate__delay-1-3">标准高效的<br />交付新体系</span>
                <span class="t t4 animate__animated a-icon3 animate__delay-1-4">数字化小微智<br />能创新体系</span>
                <span class="t t5 animate__animated a-icon3 animate__delay-1-5">数据信贷的风险识<br />别与量化风控体系</span>
              </div>
              <div class="scroll animate__animated animate__fadeInDown animate__infinite" style="animation-duration: 2s">
                <img src="@/assets/plan-scroll.png" alt="" srcset="" />
                <p>向下滑动</p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="container">
          <!-- <div class="step2 wow animate__animated animate__fadeInDown">
            <h3 class="title">“毕昇”数字小微赋能平台</h3>
            <div class="items">
              <div class="item" v-for="(item, index) in list" :key="index">
                <img :src="item.icon" alt="" srcset="" />
                <span>{{ item.text }}</span>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div> -->
          <div class="step3">
            <h3 class="title wow animate__animated animate__fadeInDown">小微中台业务驱动与管理</h3>
            <!-- <div class="items">
              <img class="wow animate__animated animate__zoomIn" src="@/assets/plan-s3-1.png" data-wow-delay="0.5s" alt="" srcset="" />
              <span class="t wow t1 animate__animated animate__fadeInDown6" data-wow-delay="1.5s">小微产品运营<br />监控管理</span>
              <span class="t wow t2 animate__animated animate__fadeInDown6" data-wow-delay="2s">小微产品设计<br />定义与管理</span>
              <span class="t wow t3 animate__animated animate__fadeInDown6" data-wow-delay="2.5s">小微客户<br />分析与管理</span>
              <span class="t wow t4 animate__animated animate__fadeInDown6" data-wow-delay="3s">营销管理，决策审核<br />与审批(含自动决策)，<br />贷后管理</span>
            </div> -->
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="container">
          <div class="step4">
            <h3 class="title wow animate__animated animate__fadeInDown">“Cornerstone·基石”业务</h3>
            <div class="box">
              <img class="s1 animate__animated animate__zoomIn" data-wow-delay="0.5s" src="@/assets/plan-s4-1.png" alt="" />
              <img class="s2 a-icon1" src="@/assets/plan-s4-2.png" data-wow-delay="1s" alt="" />
              <div class="icon animate__animated animate__fadeInDown6" :data-wow-delay="`${1.5 + index * 0.1}s`" :class="'i' + (index + 1)" v-for="(item, index) in list1" :key="index">
                <img :src="item.icon" />
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <user-footer />
      </swiper-slide>
    </swiper>
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
import "swiper/css";
import "swiper/css/effect-fade";

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

const onSlideChange = () => {
  console.log("change");
};
</script>

<style lang="scss" scoped>
.swiper-box {
  width: 100%;
  height: 100%;
}
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

.plan {
  background: url("@/assets/plan-bg.png") no-repeat #0054ff;
  background-size: cover;
  width: 100%;
  height: 100%;
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
            width: 458px;
            height: 458px;
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
        .scroll {
          width: 35px;
          margin: 83px auto 90px auto;
          position: relative;
          img {
            width: 100%;
          }
          p {
            font-size: 12px;
            color: #fff;
            position: absolute;
            display: block;
            width: 50px;
            left: 50%;
            transform: translate(-50%);
          }
        }
      }
    }
    .step2 {
      max-width: 1200px;
      margin: 0 auto;
      height: 386px;
      text-align: center;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(7px);
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .title {
        color: #2777ff;
        font-size: 32px;
        margin-bottom: 70px;
        padding-top: 70px;
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
            width: 60px;
            height: 60px;
            margin-bottom: 16px;
          }
          span {
            color: #333333;
            font-size: 24px;
          }
          p {
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
    .step3 {
      max-width: 1200px;
      margin: 80px auto;
      height: 640px;
      text-align: center;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(7px);
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .title {
        color: #2777ff;
        font-size: 32px;
        margin-bottom: 70px;
        padding-top: 70px;
      }
      .items {
        width: 1035px;
        height: 379px;
        margin: 0 auto;
        position: relative;
        img {
          width: 100%;
        }
        .t {
          position: absolute;
          font-size: 18px;
          &.t1 {
            left: 34px;
            top: 140px;
            color: #755ff9;
          }
          &.t2 {
            left: 308px;
            top: 254px;
            color: #4e72ff;
          }
          &.t3 {
            top: 86px;
            left: 566px;
            color: #0cd7ff;
          }
          &.t4 {
            right: 42px;
            top: 193px;
            color: #22d9fe;
          }
        }
      }
    }
    .step4 {
      max-width: 1200px;
      margin: 80px auto;
      height: 740px;
      text-align: center;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(12px);
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .title {
        color: #2777ff;
        font-size: 32px;
        margin-bottom: 177px;
        padding-top: 107px;
      }
      .box {
        position: relative;
        width: 957px;
        height: 248px;
        margin: 0 auto;
        .s1 {
          width: 100%;
        }
        .s2 {
          position: absolute;
          width: 704px;
          height: 262px;
          left: 50%;
          margin-left: -352px;
          top: -60px;
          opacity: 0;
        }
        .icon {
          position: absolute;
          img {
            width: 84px;
            height: 88px;
          }
          p {
            color: #666666;
            font-size: 22px;
          }
          &.i1 {
            top: -100px;
            left: 175px;
          }
          &.i2 {
            top: -100px;
            right: 181px;
          }
          &.i3 {
            top: 93px;
            right: 40px;
          }
          &.i4 {
            top: 200px;
            left: 45%;
          }
          &.i5 {
            top: 105px;
            left: 50px;
          }
        }
      }
    }
  }
}
</style>
