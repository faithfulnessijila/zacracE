import  { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/sign-in.vue';
import SignUp from '@/views/sign-up.vue';
import Forgotpassword from '@/views/forgotpassword.vue';
import Newpassword from '@/views/newpassword.vue';
import Otp from '@/views/otp.vue';
import Homepage from '@/views/homepage.vue';
import Preview from '@/views/preview.vue';
import AuthCallback from '@/views/AuthCallback.vue';





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
    path: '/new-password',  component: Newpassword
},
{
  path: '/preview/:productId',name: 'Preview',  component:Preview
},
{
  path: "/auth-callback", 
  name: "AuthCallback",   
  component: AuthCallback
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
  scrollBehavior(to, from, savedPosition) {
   
    return { top: 0, left: 0 };
  },
});


export default router;

