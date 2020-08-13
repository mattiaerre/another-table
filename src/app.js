const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const logger = require('morgan');
const path = require('path');
const reload = require('reload');
const favicon = require('serve-favicon');

const schema = require('./graphql/schema');
const api = require('./routes/api');
const autocomplete = require('./routes/autocomplete');
const index = require('./routes/index');
const restaurant = require('./routes/restaurant');
const search = require('./routes/search');

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

app.use('/api/v1', api);
app.use('/autocomplete', autocomplete);
app.use('/', index);
app.use('/restaurant', restaurant);
app.use('/search', search);

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

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
