// main.ts
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import routes from "./routes/routes";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(routes);
app.mount("#app");
    