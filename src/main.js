import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";

const app = createApp(App);
app.use(VCalendar, {});

app.mount("#app");
