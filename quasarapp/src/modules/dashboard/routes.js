export default [
  {
    path: '/dashboard',
    component: () => import('../../pages/dashboard.vue'),
    meta: { permissions: ['dashboard']}
  },
]
