import LandingPage from '@/views/LandingPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage,
  },
  {
    path: '/admin-categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
  },
  {
    path: '/admin-orders',
    name: 'admin-orders',
    component: () => import('../views/AdminOrders.vue'),
  },
  {
    path: '/admin-panel',
    name: 'admin-panel',
    component: () => import('../views/AdminPanel.vue'),
  },
  {
    path: '/admin-products',
    name: 'admin-products',
    component: () => import('../views/AdminProducts.vue'),
  },
  {
    path: '/admin-users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
  },
  {
    path: '/legal-disclaimers',
    name: 'legal-disclaimers',
    component: () => import('../views/LegalDisclaimers.vue'),
  },
  {
    path: '/legal-privacy',
    name: 'legal-privacy',
    component: () => import('../views/LegalPrivacy.vue'),
  },
  {
    path: '/legal-terms',
    name: 'legal-terms',
    component: () => import('../views/LegalTerms.vue'),
  },
  {
    path: '/order-payement',
    name: 'order-payement',
    component: () => import('../views/OrderPayement.vue'),
  },
  {
    path: '/product-details/:id',
    name: 'product-details',
    component: () => import('../views/ProductDetails.vue'),
  },
  {
    path: '/products-list',
    name: 'products-list',
    component: () => import('../views/ProductsList.vue'),
  },
  {
    path: '/user-cart',
    name: 'user-cart',
    component: () => import('../views/UserCart.vue'),
  },
  {
    path: '/user-connection',
    name: 'user-connection',
    component: () => import('../views/UserConnection.vue'),
  },
  {
    path: '/user-inscription',
    name: 'user-inscription',
    component: () => import('../views/UserInscription.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
