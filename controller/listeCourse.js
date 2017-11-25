const data = require('../listeCourse')

var listeCourse = {

    createListCourseWithName: function(name) {
      data.push({"name": name, "uuid": "dihvfevfrfklgrjbklgrfklbjgtlb"})
    },

    getData: function() {
      return data
    }
}

module.exports= listeCourse