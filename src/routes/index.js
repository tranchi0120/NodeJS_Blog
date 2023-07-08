const newRouter = require('./new')
const siteRouter = require('./site')
const courseRouter = require('./courses')

function route(app) {
    app.use('/new', newRouter)

    app.use('/courses', courseRouter)

    app.use('/', siteRouter)
}

module.exports = route;
