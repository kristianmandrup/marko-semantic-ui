var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('sidebar-menu', input);
  template.render(input, out);
};
