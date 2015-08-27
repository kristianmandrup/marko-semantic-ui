var template = require('./template.marko');

exports.renderer = function(input, out) {
  if (!input.label) {
    input.label = input.field;
    input.field = ' ';
  }

  // to use different variant if type is set ;)
  input.toggle  = input.type == 'toggle';
  input.slider  = input.type == 'slider';
  input.default = !(input.toggle || input.slider);

  template.render(input, out);
};
