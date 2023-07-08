const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose')

class CourseController {

    show(req, res) {
        // [get] courses/:slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(err => {
                console.log(err)
            })

    }


    create(req, res, next) {
        // [get] courses/create 
        res.render('courses/create')

    }

    // [post] courses/store
    store(req, res) {
        const course = new Course(req.body);
        course.save()
            .then(() => {
                res.redirect('/')
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
module.exports = new CourseController();