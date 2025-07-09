import  { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/sign-in.vue';
import SignUp from '@/views/sign-up.vue';



const routes = [
  {
    path: '/sign-up', component:SignUp
  },
  {
    path: '/sign-in', component: SignIn
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;

