var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.type = input.type || 'button';
  input.btn = true;
  template.render(input, out);
};
