const express = require("express");
const morgan = require("morgan");
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 4000;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource\\views'));
console.log(path.join(__dirname, 'resource\\views'));


app.get('/', function (req, res) {
    res.render('home');
});
app.get('/new', function (req, res) {
    res.render('new');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
