var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('sidebar-menus', input);
  template.render(input, out);
};
