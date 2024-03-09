import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia"; //1.导入createPinia
import App from "./App.vue";

const pinia = createPinia(); //2.执行createPinia 得到一个pinia的实例
const app = createApp(App);

app.use(pinia); //3.把这个pinia的实例加入到app中
app.mount("#app");

// createApp(App).mount('#app')
