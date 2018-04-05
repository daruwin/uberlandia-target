<template>
  
  <div class="employees">
  
    <h1>Employees Participation Status</h1> 
    
    <div v-if="employees.length > 0" class="table-wrap">
      <div><router-link v-bind:to="{ name: 'NewEmployee' }" class="">Add Employee</router-link></div>
      <br />
      <table>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Last Name</td>
          <td>Participation</td>
          <td align="center">Action</td>
        </tr>
        <tr v-for="employee in employees">
          <td align="center">{{ employee.id }}</td>
          <td align="center">{{ employee.name }}</td>
          <td align="center">{{ employee.lastName }}</td>
          <td align="center">{{ employee.entry }}%</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditEmployee', params: { id: employee.id } }">Edit</router-link> | <a href="#" @click="deleteEmployee(employee.id)">Delete</a>
          </td>
        </tr>
      </table> 
      <br /><br />
      <div class="chart-wrap">
        <chartjs-doughnut v-bind:labels="employeesNames" v-bind:datasets='[{ data: employeesEntries, backgroundColor: employeesColors }]' v-bind:option='option' ></chartjs-doughnut>
      </div>
    </div>

    <div v-else>
      There are not employees... Let's add some now! <br /><br />
      <router-link v-bind:to="{ name: 'NewEmployee' }" class="add_employee_link">Add Employee</router-link>
    </div>
    
  </div>

</template>

<script>
  import EmployeesService from '@/services/EmployeesService'

  export default {
    name: 'employees',
    data() {
      return {
        employees: [],
        employeesNames: [],
        employeesEntries: [],
        employeesColors: [],
        option: {
          title: {
            display: true,
            position: 'bottom',
            text: 'Employees Participation Status (EPS)'
          }
        }
      }
    },
    mounted() {
      this.getEmployees()
    },
    methods: {
      async getEmployees() {
       
        const response = await EmployeesService.fetchEmployees()
        this.employees = response.data.employees

        var code
        for (var i = 0; i < this.employees.length; i++) { 
          this.employeesNames.push(this.employees[i].name)
          this.employeesEntries.push(this.employees[i].entry)
          code = '#' + Math.floor(100000 + Math.random() * 900000)
          this.employeesColors.push(code)
        }

      },
      async deleteEmployee (id) {
        await EmployeesService.deleteEmployee(id)
        this.$router.push({ name: 'DeleteConfirmation' })
      }
    }
  }
</script>

<style type="text/css">

  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  .chart-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  } 

  table {
    display: inline-block;
  }

  table th, table tr {
    text-align: left;
  }  

  table thead {
    background: #f2f2f2;
  }

  table tr td {
    padding: 10px;
  }

  table tr:nth-child(odd) {
    background: #f2f2f2;
  }

  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }

  a {
    color: #4d7ef7;
    text-decoration: none;
  }

  a.add_employee_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }

</style>
































