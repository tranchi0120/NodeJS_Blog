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

    // [get] courses/:id/edit 
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)

    }
    // [put] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }


}
module.exports = new CourseController();