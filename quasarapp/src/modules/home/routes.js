export default [
  {
    path: '/home',
    component: () => import('./components/Index'),
    meta: {breadcrumbs: [{label: 'Главная'}]},
  },
]
