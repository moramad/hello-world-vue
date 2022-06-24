import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Dashboard_View from '../views/Dashboard.vue'
import MasterDevices_View from '../views/MasterDevices.vue'
import Setting_View from '../views/Settings.vue'

const routes = [{
  path: '/',
  name: 'Dashboard_View',
  component: Dashboard_View
},
{
  path: '/devices',
  name: 'MasterDevices_View',
  component: MasterDevices_View
},
{
  path: '/settings',
  name: 'Setting_View_View',
  component: Setting_View
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router