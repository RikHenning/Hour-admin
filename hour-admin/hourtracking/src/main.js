import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createVfm } from 'vue-final-modal';
import EmployeeList from "./components/EmployeeList.vue";



const app = createApp(App);

app.use(router);
// app.use(VueFinalModal);

const vfm = createVfm();
app.use(vfm);

app.component('EmployeeList', EmployeeList);

app.mount("#app");


