const newRouter = require('./new')
const siteRouter = require('./site')
const courseRouter = require('./courses')
const meRouter = require('./me')

function route(app) {
  app.use('/new', newRouter)
  app.use('/courses', courseRouter)
  app.use('/me', meRouter)
  app.use('/', siteRouter)
}

module.exports = route
