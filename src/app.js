const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const reload = require('reload');
const sassMiddleware = require('node-sass-middleware');
const graphqlHTTP = require('express-graphql');

const index = require('./routes/index');
const restaurant = require('./routes/restaurant');
const search = require('./routes/search');
const autocomplete = require('./routes/autocomplete');
const api = require('./routes/api');
const schema = require('./graphql/schema');

const app = express();

reload(app);

app.locals.pretty = true;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/restaurant', restaurant);
app.use('/search', search);
app.use('/autocomplete', autocomplete);
app.use('/api/v1', api);

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public/stylesheets'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/stylesheets',
    force: true,
    response: true // info: https://github.com/sass/node-sass-middleware#options
  })
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
