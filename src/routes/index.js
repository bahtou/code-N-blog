var controllers = require('../controllers')
  , home = controllers.Home
  , admin = controllers.Admin
  , blog = controllers.Blog
  , sAss = controllers.sAss;

module.exports = exports = function(app) {
  //Home page
  app.get('/', home.index);

  //Blog page
  app.get('/blog', blog.index);

  //Admin page
  app.get('/logIn', admin.index);
  app.get('/admin/new', admin.nuevo);

  //thesAss
  app.get('/thesAss', sAss.index);
};