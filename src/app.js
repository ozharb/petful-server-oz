'use strict';

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV, CLIENT_ORIGIN } = require('./config');
const PeopleRouter = require('./people/people.router');
const PetsRouter = require('./pets/pets.router');

const app = express();
app.use(cors({ origin: CLIENT_ORIGIN}));

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.get('/', (req, res) => {
  res.send('Petful Api');
});
app.use('/api/people', PeopleRouter)
app.use('/api/pets', PetsRouter)

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});



module.exports = app;