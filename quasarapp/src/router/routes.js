import auth from '../modules/auth/routes'
import home from '../modules/home/routes'
import dashboard from '../modules/dashboard/routes'

const routes = [
  {
    path: '/',
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem('user'))?.user;
      if (user) {
        if (user.permissions.filter(x => ['super_admin', 'dashboard'].includes(x)).length) {
          next('/dashboard');
        } else {
          next('/home');
        }
      } else {
        next('/login');
      }
    }
  },
  ...auth,
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      ...home,
      ...dashboard,
      { path: '/dashboard_v2', component: () => import('pages/dashboard_v2.vue') },
      { path: '/dashboard_v3', component: () => import('pages/dashboard_v3.vue') },
      { path: '/customer_management', component: () => import('pages/customer_management.vue') },
      { path: '/change_request', component: () => import('pages/change_request.vue') },
      { path: '/my_profile', component: () => import('pages/my_profile.vue') },
      { path: '/sales_invoices', component: () => import('pages/sales_invoices.vue') },
      { path: '/quotes', component: () => import('pages/quotes.vue') },
      { path: '/transactions', component: () => import('pages/transactions.vue') },
      { path: '/employee_salary_list', component: () => import('pages/employee_salary_list.vue') },
      { path: '/calendar', component: () => import('pages/calendar.vue') },
      { path: '/department', component: () => import('pages/department.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '*', component: () => import('pages/Error404.vue') },
      ]
  })
}

export default routes
