var controllers = require('../controllers')
  , home = controllers.Home
  , blog = controllers.Blog;

module.exports = exports = function(app) {
  //Home page
  app.get('/', home.index);

  //Blog
  app.get('/blog', blog.index);

};