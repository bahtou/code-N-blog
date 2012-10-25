module.exports.index = function( req, res ) {
  res.render('admin/index', {
    title: 'Admin Page'
  });
};

module.exports.nuevo = function( req, res ) {
  res.render('admin/new', {
    title: 'New Post'
  });
};
