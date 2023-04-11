import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'distanceCalculator',
      component: () => import('@/components/modules/calculators/DistanceCalculator.vue')
    },
    {
      path: '/expense',
      name: 'expense',
      component: () => import('@/components/modules/calculators/ExpenseCalculator.vue')
    }
  ]
})

export default router
