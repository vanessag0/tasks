const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
// const { ppid } = require('process');

// port
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});