module.exports.index = function( req, res ) {
  res.render('blog/index', {
    title: "Code blog'n"
  });
};