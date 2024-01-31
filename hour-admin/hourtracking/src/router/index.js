import { createRouter, createWebHistory } from "vue-router";
import InvoicingPage from '../views/InvoicingPage'
import HomePage from '../views/HomePage'
import EmployeePage from '../views/Employee'
// import PlanningPage from '../views/Planning'

const routes = [
    // {
    //     path: '/',
    //     redirect: '/invoicingPage' // Redirect to your component
    //   },
      {
        path: '/invoicingPage',
        name: 'InvoicingPage',
        component: InvoicingPage
      },
   
    // {
    //     path: '/InvoicingPage',
    //     name: 'InvoicingPage',
    //     component: InvoicingPage
    // },
    {
        path: '/HomePage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/Employee',
        name: 'EmployeePage',
        component: EmployeePage
    },
    // {
    //     path: '/Planning',
    //     name: 'PlanningPage',
    //     component: PlanningPage
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes
})

export default router