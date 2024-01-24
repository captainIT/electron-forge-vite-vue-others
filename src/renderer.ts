import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "~/styles/index.scss";
import "element-plus/theme-chalk/src/message.scss";
import "uno.css";
import i18n from "./i18n";

const app = createApp(App)
app.use(i18n);

app.use(ElementPlus)
app.mount('#app');


