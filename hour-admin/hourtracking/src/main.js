import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/style.css';
import { VueFinalModal } from 'vue-final-modal';
import LocalStorageExample from "./components/LocalStorageExample.vue";
import EmployeeList from "./components/EmployeeList.vue";

const app = createApp(App);

app.use(router);
app.use(VueFinalModal);

app.component('LocalStorageExample', LocalStorageExample);
app.component('EmployeeList', EmployeeList);

app.mount("#app");
