const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
var listeCourse = require('./controller/listeCourse')

app.get('/', (req, res) => {
    res.send(listeCourse.getData())
})

app.post('/liste-course', (req, res) => {
  console.log(req.name)
    listeCourse.createListCourseWithName(req.body.name)
})

app.listen(PORT)