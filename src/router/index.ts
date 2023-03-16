import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'distanceCalculator',
      breadCrumbs: 'Расстояние',
      component: () => import('@/view/DistanceCalculator.vue')
    },
    {
      path: '/expense',
      name: 'expense',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/ExpenseCalculator.vue')
    }
  ]
})

export default router
