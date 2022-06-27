export default [
  {
    path: '/',
    component: () => import('./components/AuthLayout.vue'),
    children: [
      {path: '/login', component: () => import('./components/Login')},
    ]
  }
]
