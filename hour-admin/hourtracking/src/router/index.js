import { createRouter, createWebHistory } from "vue-router";
import Invoicing from '../views/Invoicing'

const routes = [
    {
        path: '/invoicing',
        name: 'InvoicingPage',
        component: Invoicing
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes
})

export default router