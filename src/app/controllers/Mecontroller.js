const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class Mecontroller {
  storedCourses(req, res, next) {
    Course.find({})
      .then((course) =>
        res.render('me/stored-Courses', {
          course: multipleMongooseToObject(course),
        }),
      )
      .catch(next)
  }
}
module.exports = new Mecontroller()
