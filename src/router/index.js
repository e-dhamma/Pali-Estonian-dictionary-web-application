import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Term from '@/components/Term'
import SignUp from '@/components/SignUp'
import InfoForUser from '@/components/InfoForUser'
import TermList from '@/components/TermList'
import LetterToAdmin from '@/components/LetterToAdmin'
import SignIn from '@/components/SignIn'
import UserPage from '@/components/UserPage'
import ForAdmin from '@/components/ForAdmin'

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
      props: true,
      name: 'Term',
      component: Term
    },
    {
      path: '/registreeru',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/logi-sisse',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/kasutajaleht',
      name: 'UserPage',
      component: UserPage
    },

    {
      path: '/kasutajale',
      name: 'InfoForUser',
      component: InfoForUser
    },
    {
      path: '/loetelu',
      name: 'TermList',
      component: TermList
    },
    {
      path: '/kiri-haldajale',
      name: 'LetterToAdmin',
      component: LetterToAdmin
    },
    {
      path: '/haldajale',
      name: 'ForAdmin',
      component: ForAdmin
    }

  ],
  mode: 'history'
})
