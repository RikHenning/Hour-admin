import { createRouter, createWebHistory } from "vue-router";
import InvoicingPage from '../views/InvoicingPage.vue'
import HomePage from '../views/HomePage.vue'
import EmployeePage from '../views/Employee.vue'
import PlanningPage from '../views/Planning.vue'

const routes = [
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/invoicingPage',
    name: 'InvoicingPage',
    component: InvoicingPage
  },
  {
      path: '/employee',
      name: 'EmployeePage',
      component: EmployeePage
  },
  {
      path: '/planning',
      name: 'PlanningPage',
      component: PlanningPage
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes
})

export default router