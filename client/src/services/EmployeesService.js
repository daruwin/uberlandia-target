import Api from '@/services/Api'

export default {

  fetchEmployees() {
    return Api().get('employees')
  },

  addEmployee (params) {
    return Api().post('employees', params)
  },

  updateEmployee (params) {
    return Api().put('/' + params.id, params)
  },

  getEmployee (params) {
    return Api().get("/" + params.id)
  },

  deleteEmployee (id) {
    return Api().delete('/' + id)
  }
 
}
