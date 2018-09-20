import Vue from 'vue'
import Router from 'vue-router'
import LuckDraw from '@/components/LuckDraw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LuckDraw',
      component: LuckDraw
    }
  ]
})
