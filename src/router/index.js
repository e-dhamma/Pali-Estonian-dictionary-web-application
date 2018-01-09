import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Term from '@/components/Term'
import SignUp from '@/components/SignUp'
import InfoForUser from '@/components/InfoForUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/terminid/:pali',
      name: 'Term',
      component: Term
    },
    {
      path: '/registreeru',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/kasutajale',
      name: 'InfoForUser',
      component: InfoForUser
    }

  ],
  mode: 'history'
})
