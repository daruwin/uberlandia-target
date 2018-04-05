const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect;

var Employee = require('../models/employee');

app.get('/employees', (req, res) => {
  Employee.find({}, 'id name lastName entry', function (error, employees) {
    if (error) { console.error(error); }
    res.send ({ 
      employees: employees
    })
  }).sort({ id: -1 })
}) 

app.post('/employees', (req, res) => {

  var db = req.db;
  var id = req.body.id;
  var name = req.body.name;
  var lastName = req.body.lastName;
  var entry = req.body.entry;
  
  var new_employee = new Employee ({
    id: id,
    name: name,
    lastName: lastName,
    entry: entry
  })

  new_employee.save(function (error) {
    if (error) {
      console.log( error)
    }
    res.send({ success: true })
  })

})

app.put('/:id', (req, res) => {
  var db = req.db;

  const doc = {
    name: req.body.name,
    lastName: req.body.lastName,
    entry: req.body.entry,
  }

  Employee.update({ id: req.params.id}, doc, function(err, raw) {
    if (err) {
      res.send(err)
    }
    res.send({ success: true })
  })
  
})

app.delete('/:id', (req, res) => {
  var db = req.db;
  Employee.remove({
    id: req.params.id
  }, function (err, employee) {
    if (err) res.send(err)
   res.send({ success: true })
  })
})

app.get('/:id', (req, res) => {
  var db = req.db;
  Employee.find({"id": req.params.id}, 'name lastName entry', function (error, employee) {
    if (error) { console.error(error); }
    res.send(employee)
  })
})

app.listen(process.env.PORT || 8081)

















