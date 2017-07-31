const router = require('express').Router();
const index = require('./routes/index');
const message = require('./routes/message');

const routes = function() {
  router.get('/', index);
  router.get('/message.json', message);

  return router;
};

module.exports = routes();
