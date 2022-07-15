<template>
  <footer class="footer">
    <div class="main">
      <div class="col-l">
        <img src="@/assets/logo.png" alt="" />
      </div>
      <div class="col-r">
        <div class="top">
          <ul>
            <li v-for="(item, index) in links" :key="index">
              <a>{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <span>电话：023-6666 8888</span>
          <span>地址：重庆市 渝北区 黄山大道中段7号（中国进出口银行8楼）</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const links = ref([
  {
    text: "首页",
    link: "/",
  },
  {
    text: "解决方案",
    link: "/",
  },
  {
    text: "企业服务",
    link: "/",
  },
  {
    text: "战略伙伴",
    link: "/",
  },
  {
    text: "关于我们",
    link: "/",
  },
  {
    text: "联系我们",
    link: "/",
  },
]);
</script>

<style lang="scss" scoped>
.footer {
  background: #0054ff;
  width: 100%;
  height: 198px;
  .main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding-top: 43px;
    box-sizing: border-box;
    justify-content: space-between;
    .col-l {
      width: 200px;
      height: 60px;
      img {
        height: 100%;
      }
    }
    .col-r {
      .top {
        ul {
          display: flex;
          font-size: 18px;
          color: #fff;
          li {
            padding: 0 36px;
            box-sizing: border-box;
            position: relative;
            &:first-child {
              padding-left: 0;
            }
            &:last-child {
              border-right: 0;
              &::after {
                display: none;
              }
            }
            &::after {
              position: absolute;
              content: "";
              width: 1px;
              height: 18px;
              right: 0;
              display: block;
              top: 50%;
              background: #fff;
              transform: translateY(-50%);
            }
          }
        }
      }
      .bottom {
        font-size: 16px;
        color: #fff;
        margin-top: 20px;
        span {
          margin-right: 58px;
        }
      }
    }
  }
}
</style>
