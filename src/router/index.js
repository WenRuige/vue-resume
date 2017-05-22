import Vue from 'vue'
import Router from 'vue-router'
import Left from '@/components/Left'
//import Right from '@/components/Right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Left',
      component: Left
    }
  ]
})
