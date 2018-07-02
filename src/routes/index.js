import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Nerd Blog',
    component: () => import('./../components/pages/nerd-blog'),
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('./../components/templates/Home')
    },
    {
      path: '/poster',
      name: 'Poster',
      component: () => import('./../components/templates/Poster'),
      children: [
        {
          path: '/poster/',
          name: 'LoginForm',
          component: () => import('./../components/organims/LoginForm')
        },
        {
          path: '/poster/admin',
          name: 'PosterAdmin',
          component: () => import('./../components/organims/PosterAdmin.vue')
        }
      ]
    }]
  }]
})
