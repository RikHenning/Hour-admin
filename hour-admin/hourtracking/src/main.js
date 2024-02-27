import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './assets/style.css';
import EmployeeList from "./components/EmployeeList.vue";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const app = createApp(App);

app.use(router);

app.component('EmployeeList', EmployeeList);

app.mount("#app");

