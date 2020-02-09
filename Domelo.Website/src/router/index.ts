import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/foundation/color',
    name: 'color',
    component: () => import('@/views/foundation/Color.vue'),
  },
  {
    path: '/foundation/typography',
    name: 'typography',
    component: () => import('@/views/foundation/Typography.vue'),
  },
  {
    path: '/foundation/reset-stylesheet',
    name: 'reset-stylesheet',
    component: () => import('@/views/foundation/Reset.vue'),
  },
  {
    path: '/foundation/grid',
    name: 'grid',
    component: () => import('@/views/foundation/Grid.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
