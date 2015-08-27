var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('icon', input);
  template.render(input, out);
};
