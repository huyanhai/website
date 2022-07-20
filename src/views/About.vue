<template>
  <div class="about">
    <template v-if="width > 1200">
      <swiper @init="load" :direction="'vertical'" class="swiper-box" :mousewheel="true" :modules="[Mousewheel]" v-on:slide-change="onSlideChange">
        <swiper-slide>
          <div class="step1" v-if="swiperIndex === 0">
            <div class="container">
              <img class="img-title animate__animated animate__fadeInDown" src="@/assets/about-2.png" alt="" srcset="" />
              <div class="jiesao animate__animated animate__fadeInDown animate__delay-1-1">
                <img class="jiesao-title" src="@/assets/about-4.png" alt="" srcset="" />
                <div class="box">
                  <div class="col-l">
                    <div class="col-t">拓垠科技集团成立于2018年3月，是一家专注于知识产权数字化领域的科技型企业。 <br />公司于2019年7月在重庆市股份转让中心挂牌， 股权代码为300690。</div>
                    <div class="col-b">
                      <img class="gs" src="@/assets/about-5.png" alt="" srcset="" />
                    </div>
                  </div>
                  <div class="col-r">
                    <div class="col-t"><img class="gs" src="@/assets/about-5-1.png" alt="" srcset="" /></div>
                    <div class="col-b">
                      公司团队依托云计算、大数据、人工智能、移动互联网等信息技术，以企业拥有的知识产权为切入点，构建企业全新生态，提供一站式解决方案。该系统内置了近百个知识产权风险检测指标和风控模型，综合分析企业的知识产权相关指标，通过线上平台直接生成企业知识产权综合评估报告。<br />
                      拓垠科技集团作为第三方技术服务商，致力于帮助银行、征信机构、 保理机构
                      、科技公司、企服公司、行业协会、知识产权公司等客户整合数据、增强核心竞争力，助力知识产权数字化升级。我司风险检测系统已为银行、企服公司等300多家客户提供了安全、便捷、高效、全面的数字化风控服务。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="step3" v-if="swiperIndex === 1">
            <div class="container">
              <div class="ry-box">
                <img class="ry-title animate__animated animate__fadeInDown" src="@/assets/about-13.png" alt="" />
                <div class="sw">
                  <swiper :modules="[Mousewheel, Pagination, Navigation, Autoplay]" :loop="true" :navigation="true" :pagination="true" :autoplay="true">
                    <swiper-slide class="ry-item">
                      <div class="ry-h">
                        <img src="@/assets/about-14.png" class="ry-img" />
                        <p>我司为重庆市经信委旗下“渝企金服”数字化服务机构</p>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="ry-item">
                      <div class="ry-h">
                        <img src="@/assets/about-15.png" class="ry-img" />
                        <p>
                          连续两年获得重庆市股份转让中心<br />
                          “最佳合作机构”
                        </p>
                      </div>
                    </swiper-slide>
                    <swiper-slide class="ry-item">
                      <div class="ry-h">
                        <img src="@/assets/about-16.png" class="ry-img" />
                        <p>部分技术资质证书</p>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </div>
            </div>
            <user-footer />
          </div>
        </swiper-slide>
      </swiper>
    </template>
    <template v-else>
      <div class="step2">
        <img class="img-title animate__animated animate__fadeInDown" src="@/assets/about-2.png" alt="" srcset="" />
      </div>
      <div class="step1">
        <div class="container">
          <img class="jiesao-title animate__animated animate__fadeInDown animate__delay-1" src="@/assets/about-4.png" alt="" srcset="" />
          <div class="jiesao animate__animated animate__fadeInDown animate__delay-1-4">
            <div class="box">
              <div class="col-r">
                <div class="col-b">
                  公司团队依托云计算、大数据、人工智能、移动互联网等信息技术，以企业拥有的知识产权为切入点，构建企业全新生态，提供一站式解决方案。该系统内置了近百个知识产权风险检测指标和风控模型，综合分析企业的知识产权相关指标，通过线上平台直接生成企业知识产权综合评估报告。<br />
                  拓垠科技作为第三方技术服务商，致力于帮助银行、征信机构、 保理机构
                  、科技公司、企服公司、行业协会、知识产权公司等客户整合数据、增强核心竞争力，助力知识产权数字化升级。我司风险检测系统已为银行、企服公司等300多家客户提供了安全、便捷、高效、全面的数字化风控服务。
                </div>
                <div class="col-t"><img class="gs" src="@/assets/about-5.png" alt="" srcset="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="step3">
        <img src="@/assets/rongyu.png" alt="" />
      </div>
      <user-footer style="position: initial !important" />
    </template>
  </div>
</template>
<script setup>
import UserFooter from "@/components/Footer.vue";
import { ref, inject, onMounted } from "vue";
import { Mousewheel, Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useWindowSize } from "@vueuse/core";

const swiperDom = ref({});
const swiperIndex = ref(0);
const headerActive = inject("headerActive");
const { width, height } = useWindowSize();

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

onMounted(() => {
  if (width < 1200) {
    headerActive.value = false;
  }
});
</script>

<style lang="scss" scoped>
.about {
  height: 100%;

  .step1 {
    background: url("@/assets/about-1.png") no-repeat center top;
    background-size: auto 400px;
    padding-top: 64px;
    box-sizing: border-box;
  }
  .step2 {
    background: url("@/assets/about-1-2.png") no-repeat center top;
    background-size: cover;
    padding-top: 64px;
    height: 100%;
    box-sizing: border-box;
  }
  .step3 {
    width: 100%;
    height: 100%;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    .img-title {
      width: 147px;
      height: 60px;
      padding: 49px 0 25px 140px;
      display: block;
    }
    .jiesao {
      height: 659px;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(7px);
      overflow: hidden;
      padding: 0 100px;
      box-sizing: border-box;
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .jiesao-title {
        width: 378px;
        height: 60px;
        display: block;
        margin: 51px auto 30px auto;
      }
      .box {
        display: flex;
        .col-l {
          width: 411px;
          font-size: 16px;
          color: #666666;
          word-break: break-all;
          width: 50%;
          line-height: 34px;
          .col-t {
            width: 100%;
            margin-bottom: 20px;
          }
          .col-b {
            width: 100%;
            img {
              width: 100%;
              height: 273px;
              display: block;
            }
          }
        }
        .col-r {
          margin-left: 60px;
          flex: 1 0 auto;
          width: 50%;
          flex: 1 0 auto;
          font-size: 16px;
          color: #666666;
          word-break: break-all;
          width: 50%;
          line-height: 34px;
          .col-t {
            width: 100%;
            margin-bottom: 20px;
            img {
              width: 100%;
              height: 139px;
              display: block;
            }
          }
          .col-b {
            width: 100%;
          }
        }
      }

      // .items {
      //   display: flex;
      //   width: 100%;

      //   .col-l {
      //     flex: 1 0 auto;
      //     font-size: 16px;
      //     color: #666666;
      //     word-break: break-all;
      //     width: 50%;
      //     line-height: 34px;
      //   }
      //   .gs {
      //     flex: 0 0 auto;
      //     width: 490px;
      //     height: 326px;
      //   }
      //   &.item1 {
      //     .col-l {
      //       width: 425px;
      //       height: 139px;
      //     }
      //     .gs {
      //       width: 528px;
      //       height: 139px;
      //       margin-left: 60px;
      //     }
      //   }
      //   &.item2 {
      //     .col-l {
      //       margin-left: 60px;
      //     }
      //     .gs {
      //       width: 411px;
      //       height: 273px;
      //     }
      //   }
      // }
    }
    .qywh {
      width: 247px;
      height: 71px;
      margin: 50px auto 14px auto;
      display: block;
    }
    .yzs {
      width: 247px;
      height: 71px;
      margin: 30px auto 55px auto;
      display: block;
    }
    .more-server {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 30px 200px 0 200px;
      box-sizing: border-box;
      height: 277px;
      background: rgba($color: #fff, $alpha: 0.9);
      backdrop-filter: blur(7px);
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);

      .item {
        text-align: center;
        img {
          width: 105px;
        }
        b {
          font-size: 16px;
          color: #2777ff;
          margin-bottom: 6px;
          display: block;
        }
        p {
          font-size: 14px;
          color: #666666;
        }
      }
    }

    .one-server {
      position: relative;
      box-sizing: border-box;
      padding: 0 60px;
      .bg {
        width: 100%;
      }
      .servers {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 70%;
        display: flex;
        justify-content: space-between;
        width: 90%;
        height: 183px;
        .item {
          width: 180px;
          position: relative;
          &:hover {
            .front {
              opacity: 0;
            }
            .backend {
              opacity: 1;
            }
          }
          .front {
            width: 100%;
            position: absolute;
            perspective: 1000px;
            transition: 0.5s ease-in-out;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 180px;
            }
          }
          .backend {
            width: 100%;
            position: absolute;
            backface-visibility: hidden;
            perspective: 1000px;
            transition: 0.5s ease-in-out;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 240px;
            }
          }
        }
      }
    }
    .ry-box {
      margin-top: 96px;
      width: 100%;
      height: 599px;
      background: url("@/assets/about-7.png") no-repeat;
      background-size: cover;
      margin-bottom: 50px;
      overflow: hidden;
      box-shadow: 0 3px 12px rgba($color: #000, $alpha: 0.16);
      .ry-title {
        display: block;
        margin: 50px auto 56px auto;
        width: 220px;
        height: 71px;
      }
      .sw {
        margin: 0 auto;
        width: 630px;
        .ry-item {
          .ry-h {
            position: relative;
            width: 630px;
            text-align: center;
            height: 270px;
            &::before {
              content: "";
              display: block;
              position: absolute;
              width: 100%;
              height: 41px;
              background: url("@/assets/ry-bg.png") no-repeat;
              background-size: cover;
              bottom: 65px;
            }
            img {
              width: 488px;
              height: 185px;
              position: relative;
              z-index: 10;
            }
            p {
              font-size: 16px;
              color: #fff;
              position: absolute;
              bottom: 0;
              width: 100%;
              text-align: center;
            }
          }
        }
        :deep(.swiper-pagination) {
          bottom: 40px;
          span {
            background: #fff;
            width: 5px;
            height: 5px;
          }
        }
        :deep(.swiper-button-next) {
          color: #fff !important;
          font-size: 30px;
          width: 30px !important;
          height: 30px !important;
          &::after {
            font-size: 30px;
          }
        }
        :deep(.swiper-button-prev) {
          color: #fff !important;
          width: 30px !important;
          height: 30px !important;
          &::after {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>
