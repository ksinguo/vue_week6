import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children:[
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'Product/:id',
        component: () => import('../views/front/ProductView.vue')
      },
      {
        path: 'Products',
        component: () => import('../views/front/ProductsView.vue')
      },
      {
        path: 'Cart',
        component: () => import('../views/front/CartView.vue')
      },
    ]
  }
  ,
  
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
