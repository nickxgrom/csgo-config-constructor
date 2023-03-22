import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/constructor',
            component: () => import('@/pages/Constructor.vue')
        },
        {
            path: '/configs',
            component: () => import('@/pages/Configs.vue')
        },
        {
            path: '/howto',
            component: () => import('@/pages/HowTo.vue')
        },
    ],
})

export default router