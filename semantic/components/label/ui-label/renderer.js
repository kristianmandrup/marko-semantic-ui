var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.ui = input.ui || '';
  input.ui += input.image ? ' image' : '';
  input.tagName = input.image ? ' a' : 'div';
  if (typeof input.icon === 'string') {
    input.icon = {
      name: input.icon,
      label: input.label
    }
  }
  console.log('label input', input);
  template.render(input, out);
};
