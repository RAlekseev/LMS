export default [
  {
    path: '/dashboard',
    component: () => import('./components/Index'),
    meta: {
      breadcrumbs: [{label: 'Главная', to: '/'}, {label: 'Панель управления'}],
      permissions: ['dashboard']
    },
  },
]
