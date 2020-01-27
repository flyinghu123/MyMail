import Vue from "vue"
import VueRouter from "vue-router"


// 安装插件
Vue.use(VueRouter)

// 创建router
const routes = [
  {
    name: "root",
    path: "",
    redirect: "/home"  // 重定向到home视图
  },
  {
    name: "Home",
    path: "/home",
    component: () => import("@/views/home/Home.vue")
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

// 导出
export default router