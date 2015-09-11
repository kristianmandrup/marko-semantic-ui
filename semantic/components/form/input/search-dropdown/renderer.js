var template = require('./template.marko');

exports.renderer = function(input, out) {
  if (!input.fieldWrap)
    input.fieldWrap = input.field || input.field !== '';

  if (!input.label) {
    input.label = input.field;
    input.field = ' ';
  }
  if (typeof input.icon === 'string') {
    input.icon = {
      name: input.icon
    };
  }

  // to use different variant if type is set ;)
  input.toggle  = input.type == 'toggle';
  input.slider  = input.type == 'slider';
  input.default = !(input.toggle || input.slider);

  console.log('search-dropdown ready', input);

  template.render(input, out);
};
