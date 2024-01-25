import { createRouter, createWebHistory } from "vue-router";
import InvoicingPage from '../views/Invoicing'

const routes = [
    {
        path: '/invoicing',
        name: 'InvoicingPage',
        component: InvoicingPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes
})

export default router