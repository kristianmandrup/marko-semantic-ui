var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.fieldWrap = input.field || input.field !== '';
  input.type = input.type || 'button';
  input.btn = true;
  if (typeof input.icon === 'string') {
    input.icon = {
      name: input.icon
    };
  }

  template.render(input, out);
};
