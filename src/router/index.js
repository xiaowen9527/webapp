import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/components/pages/MSite/MSite'
import Search from '@/components/pages/Search/Search'
import Order from '@/components/pages/Order/Order'
import Profile from '@/components/pages/Profile/Profile'
import Login from '@/components/pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/msite'
  }, {
    path: '/msite',
    name: 'MSite',
    component: MSite,
    meta: {
      showFooter: true
    }
  },  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      showFooter: true
    }
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      showFooter: true
    }
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }]
})
