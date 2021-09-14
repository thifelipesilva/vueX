import Vue from 'vue';
import VueRouter from 'vue-router';
import Gerentes from '../views/Gerentes.vue';
import Home from '../views/Home.vue';
import NovoUsuario from '../views/NovoUsuario.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

/*
  component: aponta para o componente da rota, previamente importado. 
  name: identifica uma rota por nome, que pode ser utilizado posteriormente. 
  path: caminho esperado na URL para que esse componente seja chamado.


*/

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
