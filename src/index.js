const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');

//config static path to run static file
app.use(express.static(path.join(__dirname, 'public')));

//config run handlebars file and reduce handlebar => hbs
app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

//use morgan to view looger and state request
app.use(morgan('combined'));

//config routes for web server
route(app);

//config listen port for web server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
