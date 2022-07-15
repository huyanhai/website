<template>
  <div class="partner">
    <div class="container">
      <img class="img-title animate__animated animate__fadeInDown" src="@/assets/par-2.png" alt="" srcset="" />
      <div class="server">
        <img class="bg" src="@/assets/par-3.png" alt="" />
        <img class="s-title animate__animated animate__fadeInDown animate__delay-1s" src="@/assets/par-4.png" alt="" srcset="" />
        <img class="s-more" src="@/assets/par-5.png" alt="" srcset="" />
      </div>
      <div class="partners">
        <img class="bg" src="@/assets/par-6.png" alt="" />
        <img class="p-title wow animate__animated animate__fadeInDown" data-wow-duration="3s" src="@/assets/par-7.png" alt="" srcset="" />
        <img class="p-more" src="@/assets/par-8.png" alt="" srcset="" />
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
.partner {
  background: url("@/assets/par-1.png") no-repeat center top;
  background-size: auto 400px;
  height: 100%;
  .container {
    max-width: 1250px;
    margin: 0 auto;
    .img-title {
      width: 280px;
      height: 117px;
      margin-top: 113px;
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
