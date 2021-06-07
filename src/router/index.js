import {createRouter, createWebHistory} from 'vue-router';


// 在Vue-router 新版本中,需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  // history: createWebHashHistory(), // hash模式
  history: createWebHistory(process.env.BASE_URL), // history模式
  routes: [
    {
      path: '/',
      component: () => import('../layout/index.vue')
    },
    {
      path: "/dashboard",
      component: () => import("../views/dashboard/")
    }
  ]
})