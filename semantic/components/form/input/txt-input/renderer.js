var template = require('./template.marko');

exports.renderer = function(input, out) {
  if (!input.fieldWrap && input.field)
    input.fieldWrap = input.field || input.field !== '';

  template.render(input, out);
};
