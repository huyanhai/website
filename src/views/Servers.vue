<template>
  <div class="servers">
    <div class="container">
      <div class="animate__animated animate__zoomIn">
        <img class="title" src="@/assets/servers-title.png" alt="" />
        <p class="text">
          拓垠科技集团有限公司团队依托云计算、大数据、人工智能、移动互联网等信息技术，以企业拥有的知识产权为切入点，构建企业全新生态，提供一站式解决方案。该系统内置了近百个知识产权风险检测指标和风控模型，综合分析企业的知识产权相关指标，通过线上平台直接生成企业知识产权综合评估报告。
        </p>
      </div>
      <div class="more">
        <div class="item" v-for="(item, index) in servers" :key="index">
          <div class="icons animate__animated animate__zoomIn animate__delay-1">
            <img class="icon  animate__animated animate__fadeInDown6 animate__delay-2" :src="item.icon" alt="" />
          </div>
          <div class="animate__animated animate__fadeInLeft1" :class="`animate__delay-3-${index + 1}`">
            <img :src="item.btn" class="s-title" />
            <p class="infos">
              <p v-html="item.text"></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import icon1 from "@/assets/servers-i1.png";
import icon2 from "@/assets/servers-i2.png";
import icon3 from "@/assets/servers-i3.png";

import btn1 from "@/assets/servers-btn1.png";
import btn2 from "@/assets/servers-btn2.png";
import btn3 from "@/assets/servers-btn3.png";

import { ref, onMounted } from "vue";

const servers = ref([
  {
    icon: icon1,
    text: "工商信息、司法信息<br/>知产信息等",
    btn: btn1,
  },
  {
    icon: icon2,
    text: "标准版、深度版、组合版",
    btn: btn2,
  },
  {
    icon: icon3,
    text: "风控模型、企业画像<br/>企业知产价值分析报告",
    btn: btn3,
  },
]);

</script>

<style lang="scss" scoped>
.servers {
  background: url("@/assets/servers-bg.png") no-repeat center bottom;
  background-size: cover;
  height: 100%;
  .container {
    width: 1200px;
    height: 700px;
    margin: 0 auto;
    background: rgba($color: #fff, $alpha: 0.9);
    box-shadow: 0 0 8px rgba($color: #000, $alpha: 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 45px 100px;
    position: absolute;
    transform: translate(-50%, -46%);
    left: 50%;
    top: 50%;
    .title {
      width: 293px;
      height: 65px;
      display: block;
      margin: 0 auto;
    }
    .text {
      font-size: 20px;
      color: #333333;
      line-height: 36px;
      margin-top: 20px;
    }
    .more {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 30px;
      position: relative;
      &::before {
        position: absolute;
        width: 930px;
        height: 26px;
        content: "";
        background: url("@/assets/servers-line.png") no-repeat;
        background-size: cover;
        left: 50%;
        transform: translateX(-50%);
        top: 190px;
      }
      .item {
        width: 264px;
        text-align: center;
        .icons {
          width: 264px;
          height: 216px;
          position: relative;
          margin-bottom: 13px;
          .icon {
            width: 128px;
            height: 93px;
            position: absolute;
            left: 50%;
            top: 70px;
            margin-left: -64px;
          }
        }
        .s-title {
          width: 133px;
          height: 45px;
        }
        .infos {
          font-size: 18px;
          color: #666666;
          line-height: 32px;
        }
        &:first-child {
          .icons {
            background: url("@/assets/servers-1.png") no-repeat;
            background-size: cover;
          }
        }
        &:nth-child(2) {
          .icons {
            background: url("@/assets/servers-2.png") no-repeat;
            background-size: cover;
          }
        }
        &:nth-child(3) {
          .icons {
            background: url("@/assets/servers-3.png") no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>
