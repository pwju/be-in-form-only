import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('../pages/home/index.vue')
const Home2 = () =>
    import ('../pages/home2/index.vue')

const routes = [
    { path: '/home', component: Home },
    { path: '/home2', component: Home2 },
    { path: '/', redirect: '/home' }
]

Vue.use(VueRouter)

var router = new VueRouter({ routes })

export default router