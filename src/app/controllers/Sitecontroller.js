const Course = require('../models/Course');
const { mutipleMogooseToObject } = require('../../utils/mongoose')

class SiteController {
    async home(req, res, next) {
        try {
            const courses = await Course.find({}).exec();
            res.render('home', { courses: mutipleMogooseToObject(courses) });
        } catch (error) {
            next(error);
        }
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();