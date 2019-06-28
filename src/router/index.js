import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import AuthGuard from '../helpers/Auth-Guards.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: "*", component: Home},
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: AuthGuard
    },
   
    {
      path: '/cadastro',
      name: 'cadastro',
      beforeEnter: AuthGuard,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Coral/CadastroCoral.vue')
    },   
    {
      path: '/editar/:id',
      name: 'editar',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Coral/Editar.vue')
    },
    {
      path: '/relacao',
      name: 'relacao',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Coral/ListaTabela.vue'),
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Registro/Register.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Coral/Profile.vue')
    }
    ,
    {
      path: '/print/:id',
      name: 'profile',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Usuario/PrintProfile.vue')
    }
  ]
})
