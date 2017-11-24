let listeCourse = require('../controller/listeCourse')


describe('Array', () => {
    describe('#createListCourseWithName()', () => {
        it('should insert a list course into json with name', () => {

                let name = "ma liste de course"
                let data = listeCourse.getData()

                it('should be added after other items', () => {
                    listeCourse.createListCourseWithName(name)
                    data[data.length - 1].name.should.equal(name)
                })
        })
    
    })
})