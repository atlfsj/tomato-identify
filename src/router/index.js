import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import HelloWorld from '../views/HelloWorld.vue'
import Service from '../views/Service.vue'
import Course from '../views/Course.vue'
import User from '../views/User.vue'
import Article from '../views/Article.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Identify from '../components/Identify.vue'
import Login from '../components/Login.vue'

const routes = [
    {
        path: '/',
        redirect: '/service'
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path: '/course',
        name: 'Course',
        component: Course
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
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/article',
        name: 'Article',
        component: Article
    },
    {
        path: '/articleDetail',
        name: 'ArticleDetail',
        component: ArticleDetail
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
/* 用hash而不是history，否则Github Pages会报404
const router = createRouter({
    history: createWebHistory(),
    routes
}) */

export default router