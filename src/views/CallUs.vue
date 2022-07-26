<template>
  <div class="call-us">
    <div class="container">
      <div class="more-info">
        <img class="title animate__animated animate__fadeInDown" src="@/assets/call-title.png" alt="" />
        <div class="text-box animate__animated animate__fadeInDown animate__delay-1">
          <p class="tell">联系电话：023-6084 9878</p>
          <p class="address">地址：重庆市两江新区黄山大道中段7号中国进出口银行(重庆分行)8楼</p>
          <button class="btn" @click="toggle" v-if="width > 1200"></button>
        </div>
        <b-map v-if="width < 1200" />
      </div>
      <div class="more-card animate__animated animate__fadeInDown animate__delay-2" v-if="width > 1200">
        <div class="card-box">
          <div class="card">
            <div class="front">
              <img src="@/assets/call-1.png" alt="" srcset="" />
            </div>
            <div class="backend">
              <img src="@/assets/call-4.png" alt="" srcset="" />
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img src="@/assets/call-2.png" alt="" srcset="" />
            </div>
            <div class="backend">
              <img src="@/assets/call-5.png" alt="" srcset="" />
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img src="@/assets/call-3.png" alt="" srcset="" />
            </div>
            <div class="backend">
              <img src="@/assets/call-6.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="more-m-card">
        <div class="col-t">
          <div>
            <img src="@/assets/c1-2.png" alt="" />
          </div>
          <div>
            <img src="@/assets/c1-1.png" alt="" />
          </div>
        </div>
        <div class="col-b">
          <img src="@/assets/c1-3.png" alt="" />
        </div>
      </div>
    </div>
    <b-map v-if="showMap" @close="toggle" />
  </div>
  <user-footer style="position: initial !important" v-if="width < 1200" />
</template>
<script setup>
import BMap from "@/components/Map.vue";
import UserFooter from "@/components/Footer.vue";

import { ref } from "vue";
import { useWindowSize } from "@vueuse/core";

const showMap = ref(false);
const { width, height } = useWindowSize();
const toggle = () => {
  showMap.value = !showMap.value;
  if (showMap.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};
</script>

<style lang="scss" scoped>
.call-us {
  background: url("@/assets/call-bg.png") no-repeat top center;
  background-size: 100% 100%;
  height: 100%;
  .container {
    .more-info {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-top: 140px;
      width: 1200px;
      margin: 0 auto 50px auto;
      .title {
        width: 264px;
        height: 120px;
        margin-bottom: 18px;
      }
      .text-box {
        text-align: left;
      }
      .text {
        color: #fff;
        font-size: 28px;
      }
      .tips {
        color: #ffffff;
        font-size: 22px;
        margin-bottom: 30px;
      }
      .address {
        font-size: 18px;
        color: #fff;
        margin-top: 8px;
        background: url("@/assets/call-i1.png") no-repeat left center;
        background-size: 28px 28px;
        padding-left: 40px;
      }
      .tell {
        background: url("@/assets/call-i2.png") no-repeat left center;
        background-size: 28px 28px;
        padding-left: 40px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 4px;
      }
      .btn {
        width: 156px;
        height: 41px;
        background: url("@/assets/call-btn.png") no-repeat;
        background-size: cover;
        cursor: pointer;
        margin-top: 30px;
        margin-left: 40px;
      }
    }
    .more-card {
      padding-bottom: 50px;
      .card-box {
        width: 1200px;
        height: 350px;
        background: rgba($color: #fff, $alpha: 0.8);
        backdrop-filter: blur(7px);
        box-shadow: 0 0 8px rgba($color: #707070, $alpha: 0.6);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 50px 127px 0 127px;
        .card {
          position: relative;
          width: 266px;
          cursor: pointer;
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
              width: 266px;
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
              width: 317px;
            }
          }
        }
      }
    }
    .more-m-card {
      width: 90%;
      margin: 0 auto;
      .col-t {
        display: flex;
        div {
          width: 50%;
          box-sizing: border-box;
          &:first-child {
            padding-right: 5px;
          }
          &:last-child {
            padding-left: 5px;
          }
          img {
            width: 100%;
          }
        }
      }
      .col-b {
        width: 100%;
        margin-top: -20px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
