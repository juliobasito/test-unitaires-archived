const data = require('../listeCourse')

var listeCourse = {

    createListCourseWithName: function(name) {
      data.push({"name": name, "uuid": "dihvfevfrfklgrjbklgrfklbjgtlb", courses: []})
    },

    deleteListCourseWithName: function(name) {
      data.forEach(function(item, index, object) {
        if (item.name === name) {
            object.splice(index, 1)
        }
      })
    },

    addCourseToListWithName: function(name_list, name_entity) {
      data.forEach(function(item, index, object) {
        if (item.name === name_list) {
            item.courses.push({"course": name_entity})
        }
      })
    },

    getCoursesWithListName: function(list_name) {
      data.forEach(function(item, index, object) {
        if (item.name === list_name) {
          console.log("voila mes courses", item.courses)
          return item.courses.json()
        }
      })
    },

    getData: function() {
      return data
    }
}

module.exports= listeCourse