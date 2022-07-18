<template>
  <div class="home">
    <div class="info-card animate__animated animate__zoomIn">
      <div class="animate__animated animate__zoomIn animate__delay-1">
        <div class="title">
          <h3>知识产权数字化服务商</h3>
          <p>Intellectual property digitalization service provider</p>
        </div>
        <p class="text p">依托云计算、大数据、人工智能、移动互联网等信息技术，以企业拥有的<br />知识产权为切入点，构建企业全新生态，提供一站式解决方案。</p>
        <p class="text m">依托云计算、大数据、人工智能、移动互联网等信息技术，以企业拥有的知识产权为切入点，构建企业全新生态，提供一站式解决方案。</p>
      </div>
      <button class="btn animate__animated animate__zoomIn animate__delay-2" @click="$router.push('/about')"></button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const home = ref(null);
</script>

<style lang="scss" scoped>
.home {
  background: url("@/assets/home-bg.png") no-repeat center bottom;
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .info-card {
    width: 960px;
    height: 414px;
    background: url("@/assets/home-card.png") no-repeat;
    background-size: cover;
    margin: 183px auto 0 auto;
    box-sizing: border-box;
    padding: 0 65px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      text-align: center;
      margin-top: 80px;

      h3 {
        color: #00e5ff;
        font-size: 40px;
        letter-spacing: 6px;
      }
      p {
        color: #00e5ff;
        font-size: 20px;
        font-weight: 100;
      }
    }
    .text {
      font-size: 18px;
      line-height: 38px;
      color: #fff;
      margin: 25px 0;
      text-align: center;
      &.p {
        display: block;
      }
      &.m {
        display: none;
      }
    }
    .btn {
      background: url("@/assets/home-bth.png") no-repeat;
      width: 180px;
      height: 44px;
      background-size: cover;
      cursor: pointer;
      &:hover {
        background: url("@/assets/home-bth1.png") no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
