import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/common/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: '/home', component: Home},
    {path: "/login",component: Login}
  ]
})
export default router