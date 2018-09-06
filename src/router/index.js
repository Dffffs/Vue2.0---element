import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import axios from '@/pages/axios'
import vuex from '@/pages/vuex'
import index from '@/pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path:'axios',
          name:'axios',
          component:axios
        },
        {
          path:'vuex',
          name:'vuex',
          component:vuex
        },
        {
          path:'index',
          name:'index',
          component:index
        }
      ]
    }

  ]
})
