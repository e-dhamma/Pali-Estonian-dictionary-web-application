import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Term from '@/components/Term'
import SignUp from '@/components/SignUp'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mõiste',
      name: 'Term',
      component: Term
    },
    {
      path: '/registreeru',
      name: 'SignUp',
      component: SignUp
    }


  ],
  mode: 'history'
})
