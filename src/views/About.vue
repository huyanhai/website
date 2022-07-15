<template>
  <div class="about">
    <div class="container">
      <img class="img-title animate__animated animate__fadeInDown" src="@/assets/about-2.png" alt="" srcset="" />
      <div class="more-server animate__animated animate__fadeInDown animate__delay-1-1">
        <div class="item">
          <img src="@/assets/about-i1.png" alt="" />
          <b>企业使命</b>
          <p>助成渝地区万千<br />企业高质量发展</p>
        </div>
        <div class="item">
          <img src="@/assets/about-i2.png" alt="" />
          <b>经营理念</b>
          <p>成就客户的心永不变<br />成就员工的心永不变</p>
        </div>
        <div class="item">
          <img src="@/assets/about-i3.png" alt="" />
          <b>企业价值观</b>
          <p>诚信为本、效率优先<br />专业至上、合作共赢</p>
        </div>
        <div class="item">
          <img src="@/assets/about-i4.png" alt="" />
          <b>企业愿景</b>
          <p>用科技技术服务<br />助企业降低成本</p>
        </div>
      </div>
      <div class="jiesao">
        <img class="jiesao-title animate__animated animate__fadeInDown animate__delay-2" src="@/assets/about-4.png" alt="" srcset="" />
        <div class="items">
          <div class="col-l">
            拓垠科技集团成立于2018年3月，是一家专注于知识产权数字化领域的科技型企业。公司于2019年7月在重庆市股份转让中心挂牌， 股权代码为300690。
            公司团队依托云计算、大数据、人工智能、移动互联网等信息技术，以企业拥有的知识产权为切入点，构建企业全新生态，提供一站式解决方案。该系统内置了近百个知识产权风险检测指标和风控模型，综合分析企业的知识产权相关指标，通过线上平台直接生成企业知识产权综合评估报告。
            拓垠科技作为第三方技术服务商，致力于帮助银行、征信机构、 保理机构
            、科技公司、企服公司、行业协会、知识产权公司等客户整合数据、增强核心竞争力，助力知识产权数字化升级。我司风险检测系统已为银行、企服公司等300多家客户提供了安全、便捷、高效、全面的数字化风控服务。
          </div>
          <img class="gs" src="@/assets/about-5.png" alt="" srcset="" />
        </div>
      </div>
      <div class="one-server">
        <img class="bg" src="@/assets/about-6.png" alt="" srcset="" />
        <img class="title wow animate__animated animate__fadeInDown" src="@/assets/about-8.png" alt="" srcset="" />
        <div class="servers">
          <div class="item">
            <div class="front">
              <img src="@/assets/about-9.png" alt="" />
            </div>
            <div class="backend">
              <img src="@/assets/about-20.png" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="front">
              <img src="@/assets/about-10.png" alt="" />
            </div>
            <div class="backend">
              <img src="@/assets/about-21.png" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="front">
              <img src="@/assets/about-11.png" alt="" />
            </div>
            <div class="backend">
              <img src="@/assets/about-22.png" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="front">
              <img src="@/assets/about-12.png" alt="" />
            </div>
            <div class="backend">
              <img src="@/assets/about-23.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="rongyu">
        <img class="bg" src="@/assets/about-7.png" alt="" srcset="" />
        <img class="title wow animate__animated animate__fadeInDown" src="@/assets/about-13.png" alt="" srcset="" />
        <div class="rongyu-box">
          <div class="item i1">
            <img src="@/assets/about-14.png" alt="" />
            <p class="wow animate__animated animate__fadeInDown">我司为重庆市经信委旗下“渝企金服”数字化服务机构</p>
          </div>
          <div class="item i2">
            <img src="@/assets/about-15.png" alt="" />
            <p class="wow animate__animated animate__fadeInDown">连续两年获得重庆市股份转让中心 <br />“最佳合作机构”</p>
          </div>
          <div class="item i3">
            <img src="@/assets/about-16.png" alt="" />
            <p class="wow animate__animated animate__fadeInDown">部分技术资质证书</p>
          </div>
        </div>
      </div>
    </div>
    <user-footer />
  </div>
</template>
<script setup>
import UserFooter from "@/components/Footer.vue";
import { onMounted } from "vue";
onMounted(() => {
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window
  });
  wow.init();
});
</script>

<style lang="scss" scoped>
.about {
  background: url("@/assets/about-1.png") no-repeat center top;
  background-size: auto 400px;
  height: 100%;
  padding-top: 64px;
  .container {
    max-width: 1250px;
    margin: 0 auto;
    .img-title {
      width: 243px;
      height: 100px;
      padding: 84px 0 77px 0;
      margin: 0 auto;
      display: block;
    }
    .more-server {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 50px;
      box-sizing: border-box;
      .item {
        width: 150px;
        text-align: center;
        img {
          width: 100%;
        }
        b {
          font-size: 25px;
          color: #2777ff;
          margin-bottom: 14px;
          display: block;
        }
        p {
          font-size: 16px;
          color: #666666;
        }
      }
    }
    .jiesao {
      margin-top: 88px;
      .jiesao-title {
        width: 410px;
        height: 62px;
        display: block;
        margin: 0 auto 48px auto;
      }
      .items {
        display: flex;
        width: 100%;
        .col-l {
          flex: 1 0 auto;
          font-size: 16px;
          color: #666666;
          word-break: break-all;
          width: 50%;
          line-height: 34px;
          margin-right: 46px;
        }
        .gs {
          flex: 0 0 auto;
          width: 490px;
          height: 326px;
        }
      }
    }
    .one-server {
      margin-top: 80px;
      position: relative;
      .bg {
        width: 100%;
      }
      .title {
        position: absolute;
        top: 14%;
        left: 50%;
        margin-left: -123px;
        width: 247px;
        height: 71px;
      }
      .servers {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 70%;
        display: flex;
        justify-content: space-between;
        width: 90%;
        .item {
          width: 230px;
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
    .rongyu {
      margin: 80px 0;
      position: relative;
      .bg {
        width: 100%;
      }
      .title {
        position: absolute;
        top: 5%;
        left: 50%;
        margin-left: -100px;
        width: 200px;
        height: 71px;
      }
      .rongyu-box {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 14%;
        left: 50%;
        transform: translateX(-50%);
        justify-content: space-between;
        height: 80%;
      }
      .item {
        text-align: center;
        p {
          font-size: 16px;
          color: #fff;
          margin-top: 10px;
        }
        &.i1 {
          top: 16%;
          img {
            height: 307px;
          }
        }
        &.i2 {
          top: 47%;
          img {
            height: 247px;
          }
        }
        &.i3 {
          top: 74%;
          img {
            height: 249px;
          }
        }
      }
    }
  }
}
</style>
