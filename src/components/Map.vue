<template>
  <div class="layer">
    <div id="allmap" class="map" ref="target"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);
const emit = defineEmits(["close"]);

onClickOutside(target, (event) => {
  emit("close");
});

const center = [106.51073, 29.619065];
const zoom = 20;

const init = () => {
  var map = new BMapGL.Map("allmap"); // 创建Map实例
  map.centerAndZoom(new BMapGL.Point(center[0], center[1]), zoom); // 初始化地图,设置中心点坐标和地图级别
  var marker = new BMapGL.Marker(new BMapGL.Point(center[0], center[1]));
  map.enableScrollWheelZoom(true);
  map.addOverlay(marker);
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.8);
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 1000;
}
.map {
  width: 1200px;
  height: 621px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
