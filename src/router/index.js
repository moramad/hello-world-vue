import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home_View from '../views/Home.vue'
import MasterDevices_View from '../views/MasterDevices.vue'
import Setting_View from '../views/Settings.vue'

const routes = [{
  path: '/',
  name: 'Home_View',
  component: Home_View
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