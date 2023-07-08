const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator')
mongoose.plugin(slug);;

const CourseSchema = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    slug: { type: String, slug: "name", unique: true }

}, {
    timestamps: true
})

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
