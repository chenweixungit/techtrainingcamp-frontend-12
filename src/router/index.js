import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../components/Game'
import Login from '../views/login/EndLogin.vue'
import Register from '../views/register/Register.vue'
import MultipGame from '../views/game/MultipGame.vue'
import menu from '../views/game/GameMenu.vue'
import MainPage from '../views/game/MainPage.vue'
import SoloGame from '../views/game/SoloGame.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },{
    path: '/multipgame',
    name: 'MultipGame',
    component: MultipGame
  }
  ,{
    path: '/menu',
    name: 'menu',
    component: menu
  }
  ,{
    path: '/main',
    name: 'MainPage',
    component: MainPage
  }
  ,{
    path:'/sologame',
    name: 'SoloGame',
    component: SoloGame
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
