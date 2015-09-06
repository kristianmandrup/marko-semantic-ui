var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('sub-menu', input);
  template.render(input, out);
};
