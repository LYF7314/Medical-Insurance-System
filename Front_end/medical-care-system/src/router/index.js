import Vue from 'vue'
import VueRouter from 'vue-router'
//定义路由
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
Vue.use(VueRouter)
//路由与组件映射
const routes = [
    //主路由
    {
        path: '/',
        component: Main,
        children: [
            //子路由
            { path: 'home', component: Home },
            { path: 'user', component: User }
        ]
    },
]

//创建router实例
const router = new VueRouter({
    routes // `routes: routes` 的缩写
})

export default router

