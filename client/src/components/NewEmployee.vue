<template>
  <div class="employees">
    <h1>Add Employees</h1>
    <div class="form">
      <div><input type="text" name="id" placeholder="ID" v-model="id"></div>
      <div><input type="text" name="name" placeholder="Name" v-model="name"></div>
      <div><input type="text" name="lastName" placeholder="Last Name" v-model="lastName"></div>
      <div><input type="text" name="entry" placeholder="Entry" v-model="entry"></div>
      <div><button class="app_employee_btn" @click="addEmployee">Add</button></div>
    </div>
  </div>
</template>

<script>
  import EmployeesService from '@/services/EmployeesService'
  export default {
    name: 'NewEmployee',
    data () {
      return {
        id: '',
        name: '',
        lastName: '',
        entry: ''
      }
    },
    methods: {
      async addEmployee () {
        await EmployeesService.addEmployee({
          id: this.id,
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

  .form input {
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
































