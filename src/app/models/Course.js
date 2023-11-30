const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const CourseSchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    videoId: String,
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
)

let Course = mongoose.model('Course', CourseSchema)
module.exports = Course
