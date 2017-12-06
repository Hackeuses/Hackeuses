import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
