import { createRouter, createWebHistory } from "vue-router";
import InvoicingPage from '../views/Invoicing'
import HomePage from '../views/HomePage'
import EmployeePage from '../views/Employee'
import PlanningPage from '../views/Planning'

const routes = [
    {
        path: '/Invoicing',
        name: 'InvoicingPage',
        component: InvoicingPage
    },
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
    {
        path: '/Planning',
        name: 'PlanningPage',
        component: PlanningPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes
})

export default router