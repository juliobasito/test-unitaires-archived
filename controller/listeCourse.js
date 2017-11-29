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
            item.courses.push({"course": name_entity, "bought": false})
        }
      })
    },

    getCoursesWithListName: function(list_name) {
      data.forEach(function(item, index, object) {
        if (item.name === list_name) {
          return item.courses
        }
      })
    },

    boughtAnItemFromList(list_name, list_item) {
      data.forEach(function(list, data, object) {
        if (list.name === list_name) {
          list.courses.forEach(function(item, data, object) {
            if (item.course === list_item) {
              item.bought = true;
            }
          })
        }
      })
    },

    getData: function() {
      return data
    }
}

module.exports= listeCourse