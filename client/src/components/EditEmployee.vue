<template>
  <div class="employees">
    <h1>Employee ID : {{ this.$route.params.id }}</h1>
      <div class="form">
        <div><input type="text" name="name" placeholder="Name" v-model="name"></div>
        <div><input type="text" name="lastName" placeholder="Last Name" v-model="lastName"></div>
        <div><input type="number" name="entry" placeholder="Entry" v-model="entry" min="0" max="100"></div>
        <div><button class="app_employee_btn" @click="updateEmployee">Update</button></div>
      </div>
  </div>
</template>

<script>
import EmployeesService from '@/services/EmployeesService'
export default {
  name: 'EditEmployee',
  data () {
    return {
      id: '',
      name: '',
      lastName: '',
      entry: ''
    }
  },
  mounted () {
    this.getEmployee()
  },
  methods: {
    async getEmployee () {
      const response = await EmployeesService.getEmployee({
        id: this.$route.params.id
      })
      var data = JSON.parse(JSON.stringify(response.data[0]))
      this.name = data.name
      this.lastName = data.lastName
      this.entry = data.entry 
    },
    async updateEmployee () {
      await EmployeesService.updateEmployee({
        id: this.$route.params.id,
        name: this.name,
        lastName: this.lastName,
        entry: this.entry
      })
      this.$router.push({ name: 'Employees' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_employee_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
