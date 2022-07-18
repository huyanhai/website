import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import "./css/animate.css";
import "./css/media.scss";

createApp(App).use(router).mount("#app");
