var template = require('./template.marko');

exports.renderer = function(input, out) {
  if (!input.label) {
    input.label = input.field;
    input.fieldWrap = true;
  }
  template.render(input, out);
};
