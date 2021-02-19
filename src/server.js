'use strict';

const app = require('./app');

const { PORT } = require('./config');

app.listen(PORT, () => {
  console.log(`Petful Server listening at http://localhost:${PORT}`);
});