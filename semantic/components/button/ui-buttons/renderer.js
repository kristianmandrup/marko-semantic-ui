var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.ui += input.icon ? ' icon' : '';
  template.render(input, out);
};
