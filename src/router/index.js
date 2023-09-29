import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/RevenueAnalysis.vue')
        },
        {
            path: '/inventory-management',
            component: () => import('../views/InventoryManagement.vue')
        }
    ]
})

export default router