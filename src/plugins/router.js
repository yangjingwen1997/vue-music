import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Follow from '../pages/Follow.vue';
import Friend from '../pages/Friend.vue';
import Column from '../pages/Column.vue';
import User from '../pages/User.vue';
import Login from '../pages/Login.vue';
import Reg from '../pages/Reg.vue';
import Cart from '../pages/Cart.vue';
import Detail from '../pages/Detail.vue';
import Detail2 from '../pages/Detail2.vue';
import NoPage from '../pages/NoPage.vue';

let routes = [
  {path:'/home',component:Home},
  {path:'/Follow',component:Follow},
  {path:'/Friend',component:Friend},
  {path:'/Column',component:Column},
  {path:'/Detail/:_id',component:Detail,name:'detail'},
  {path:'/Detail2/:_id',component:Detail2,name:'detail2'},
  {path:'/User',component:User},
  {path:'/Login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/cart',component:Cart},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  routes,
  mode:'history'
})

export default router;