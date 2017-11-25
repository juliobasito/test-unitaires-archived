let listeCourse = require('../controller/listeCourse')

const app = require('./../app')

describe('ListeCourses', () => {
    describe('#createListCourseWithName()', () => {
        it('should insert a list course into json with name', () => {

            let name = "ma liste de course"
            let data = listeCourse.getData()

            it('should be added after other items', () => {
                listeCourse.createListCourseWithName(name)
                data[data.length - 1].name.should.equal(name)
            })
        })
        it('insert cliste from api route', () => {
            return request(app).post('/liste-course')
                .send({name:"coucou"})
                .then((res) => {
                    res.status.should.equal(200)
                    res.body.status.should.equal('success')
                    res.body.data.should.be.an('object')

                    res.body.data.name.should.eql('coucou')
        })
    })
})