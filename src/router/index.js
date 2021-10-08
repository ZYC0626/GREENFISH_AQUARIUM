import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    component: () => import('../views/Front/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/Back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Back/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Back/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Back/Coupons.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('../views/Front/Layout.vue'), // Userboard
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Front/Index.vue')
      },
      {
        name: 'products',
        path: 'products/:category',
        component: () => import('../views/Front/UserProducts.vue')
      },
      {
        name: 'prodInfo',
        path: 'product/:productId',
        component: () => import('../views/Front/UserProductInfo.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/Front/UserCart.vue')
      },
      {
        path: 'checkoutInfo',
        component: () => import('../views/Front/CheckoutInfo.vue')
      },
      {
        name: 'checkoutPay',
        path: 'checkoutPay/:orderId',
        component: () => import('../views/Front/CheckoutPay.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
  // linkActiveClass: 'active'
})

export default router
