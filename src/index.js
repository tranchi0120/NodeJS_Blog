const express = require("express");
const morgan = require("morgan");
const exphbs = require('express-handlebars');
const path = require('path');

const route = require('./routes/index')

const app = express();
const port = 4000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource\\views'));

// route init
route(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
