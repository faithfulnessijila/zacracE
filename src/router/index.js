import  { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/sign-in.vue';
import SignUp from '@/views/sign-up.vue';
import Forgotpassword from '@/views/forgotpassword.vue';
import Newpassword from '@/views/newpassword.vue';
import Otp from '@/views/otp.vue';
import Homepage from '@/views/homepage.vue';
import Preview from '@/views/preview.vue';
import AuthCallback from '@/views/AuthCallback.vue';

import Product from '@/views/Product.vue';




import EditProduct from '@/views/edit-product.vue';




import Productlist from '@/views/product-list.vue';

import Admin from '@/views/admin.vue';

import Purchase from '@/views/purchase.vue';
import AdminSignin from '@/views/admin-signin.vue';












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
  path: '/purchase', component: Purchase 

},
{
  path: "/product",
  name: "Product",
  component: Product,
  meta: { requiresAuth: true },
  props: true,
},


{
  path: '/edit-product/:productId?',
  name: 'EditProduct',
  component: EditProduct,
  props: true
},



{
  path: '/preview/:productId?',
  name: 'Preview',
  component: Preview
}

,
{
  path: '/product-list',
  name: 'ProductList',
  component: Productlist,
  meta: { requiresAuth: true }   // 👈 add this
},
{
  path: '/admin',name: 'Admin',  component: Admin
},
{
  path: '/admin-signin',  name: 'AdminSignin',  component: AdminSignin
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
// 🔐 Global auth guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    next("/sign-in"); // redirect if not logged in
  } else {
    next(); // allow
  }
});


export default router;

