import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/totalpage/Home.vue'
import Login from "../views/totalpage/Login";
import Homeleader from "../views/totalpage/Homeleader";
import Homeprofessor from "../views/totalpage/Homeprofessor";
import Homeworker from "../views/totalpage/Homeworker";
import shenpiMID3 from "../views/shenpi/shenpiMID3";

Vue.use(VueRouter)

const routes = [
  {
    //login
    path: "/",
    name: "登录",
    component: Login
  },
  // {
  //   //shenpiMID3
  //   path: "/",
  //   name: "审批",
  //   component: shenpiMID3
  // },
  {
    //home
    path: '/home',
    name: '管理人员页面',
    component: Home
  },
  {
    //homeleader
    path: '/homeleader',
    name: '指挥人员页面',
    component: Homeleader
  },
  {
    //homeprofessor
    path: '/homeprofessor',
    name: '专家人员页面',
    component: Homeprofessor
  },
  {
    //homeworker
    path: '/homeworker',
    name: '工作人员页面',
    component: Homeworker
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
