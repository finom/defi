const Router = require('./router');

function router(obj, route, type) {
  Router[type || 'hash'].subscribe(obj, route);
  return obj;
}

module.exports = router;
