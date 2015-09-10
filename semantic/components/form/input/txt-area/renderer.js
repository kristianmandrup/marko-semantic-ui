var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.fieldWrap = input.field || input.field !== '';
  template.render(input, out);
};
