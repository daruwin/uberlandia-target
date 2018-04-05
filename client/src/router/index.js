import Vue from 'vue'
import Router from 'vue-router'
import Employees from '@/components/Employees'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'
import DeleteConfirmation from '@/components/DeleteConfirmation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Employees',
      component: Employees
    },
    {
      path: '/new',
      name: 'NewEmployee',
      component: NewEmployee
    },
    {
      path: '/:id',
      name: 'EditEmployee',
      component: EditEmployee
    },
    {
      path: '/deleteConfirmation',
      name: 'DeleteConfirmation',
      component: DeleteConfirmation
    }
  ]
})
