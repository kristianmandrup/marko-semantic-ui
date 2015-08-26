var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.type = input.type || 'button';
  template.render(input, out);
};
