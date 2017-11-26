let listeCourse = require('../controller/listeCourse')
const request = require('supertest')
require('chai').should()
const app = require('./../app')

describe('ListeCourses', () => {
    describe('#createListCourseWithName()', () => {
        it('insert liste from api route', () => {
            return request(app).get('/').then((res, err) => {
                res.name.should.equal("mon nom")
            })
        })
    })
})