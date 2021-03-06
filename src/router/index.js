import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import DefaultLayout from './layouts/default/index.vue'
import AdminLayout from './layouts/admin/index.vue'
import DemoLayout from './layouts/demo/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/erp',
      name: 'erp',
      redirect: '/erp/dashboard',
      component: DefaultLayout,
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/erp/dashboard.vue')
      }]
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/roles',
      component: AdminLayout,
      children: [{
        path: 'roles',
        name: 'roles',
        component: () => import(/* webpackChunkName: "roles" */ '@/views/admin/roles.vue')
      }]
    },
    {
      path: '/demo',
      name: 'demo',
      redirect: '/demo/dialog',
      component: DemoLayout,
      children: [{
        path: 'dialog',
        name: 'dialog',
        component: () => import(/* webpackChunkName: "dialog" */ '@/views/demo/dialog.vue')
      }, {
        path: 'upload',
        name: 'upload',
        component: () => import(/* webpackChunkName: "uploader" */ '@/views/demo/upload.vue')
      }, {
        path: 'strip',
        name: 'strip',
        component: () => import(/* webpackChunkName: "uploader" */ '@/views/demo/strip-code.vue')
      }, {
        path: 'table',
        name: 'table',
        component: () => import(/* webpackChunkName: "uploader" */ '@/views/demo/table.vue')
      }]
    }
  ]
})
