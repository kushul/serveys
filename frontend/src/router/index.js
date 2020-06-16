import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SurveyFullView from "../views/SurveyFullView.vue"
import Page404 from "../views/404.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/survey/:id',
    name: 'surveyFullView',
    component: SurveyFullView
  },
  {
    path: "/404",
    name: "not-found",
    component: Page404,
  },
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
