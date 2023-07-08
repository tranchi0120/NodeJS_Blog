const express = require("express");
const morgan = require("morgan");
const exphbs = require('express-handlebars');
const path = require('path');

const route = require('./routes/index')
const db = require('./config/db')

// connect DB
db.connect()

const app = express();
const port = 3000;

// thêm hai dòng này để có thể add dữ liệu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

// route init
route(app)
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
