import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SearchResult from './views/SearchResult.vue'
import MyHome from './views/MyHome.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '',
        name: 'search',
        component: () => import(/* webpackChunkName: "about" */ './components/Home/Search.vue')
      }]
    },
    {
      path: '/searchResult',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/myhome',
      name: 'home',
      component: MyHome
    }
  ]
})
