const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
var listeCourse = require('./controller/listeCourse')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(listeCourse.getData())
})

app.post('/liste-course', (req, res) => {
  if (req.body.name) {
    listeCourse.createListCourseWithName(req.body.name)
  }
  res.send(listeCourse.getData())
})

app.delete('/liste-course', (req, res) => {
  if (req.body.name) {
    listeCourse.deleteListCourseWithName(req.body.name)
  }
  res.send(listeCourse.getData())
})

app.get('/courses/:list_name', (req, res) => {
  if (req.params.list_name) {
    var name_replace = req.params.list_name.replace(/_/gi, ' ')
    res.send(listeCourse.getCoursesWithListName(name_replace))
  }
})

app.put('/add-course', (req, res) => {
  if (req.body.name_list && req.body.name_entity) {
    listeCourse.addCourseToListWithName(req.body.name_list, req.body.name_entity)
  }
  res.send(listeCourse.getData())
})

app.listen(PORT)

module.exports = app