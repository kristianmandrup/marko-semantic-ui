var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('drop down', input);
  template.render(input, out);
};
