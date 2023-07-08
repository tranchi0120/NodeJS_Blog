const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.plugin(slug);

const CourseSchema = new Schema({
    name: String,
    description: String,
    image: String,
    videoId: String,
    slug: { type: String, slug: "name", unique: true },
}, {
    timestamps: true
});

// CourseSchema.pre("save", function (next) {
//     this.slug = this.name.split(" ").join("-");
//     next();
// });

CourseSchema.plugin(uniqueValidator);

let Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
