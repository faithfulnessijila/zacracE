import  { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/sign-in.vue';
import SignUp from '@/views/sign-up.vue';
import Forgotpassword from '@/views/forgotpassword.vue';
import Newpassword from '@/views/newpassword.vue';
import Otp from '@/views/otp.vue';
import Homepage from '@/views/homepage.vue';




const routes = [
  {
    path: '/sign-up', component:SignUp
  },
  {
    path: '/', component:Homepage
  },
  {
    path: '/forgot-password', component: Forgotpassword
  },
  {
    path: '/new-password', component: Newpassword
},
{
  path: '/sign-in', component: SignIn
},
{
  path: '/otp', component: Otp
}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;

