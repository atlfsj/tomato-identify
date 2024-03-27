import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import Service from '../views/Service.vue'
import Course from '../views/Course.vue'
import User from '../views/User.vue'
import Identify from '../components/Identify.vue'


const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path: '/course',
        name: 'Course',
        component: Service
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/identify',
        name: 'Identify',
        component: Identify
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router