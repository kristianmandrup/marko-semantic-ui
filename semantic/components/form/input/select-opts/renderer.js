var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('select opts', input);
  template.render(input, out);
};
