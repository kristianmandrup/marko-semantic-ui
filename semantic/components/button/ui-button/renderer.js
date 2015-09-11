var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('ui-button', input);
  if (!input.fieldWrap && input.field)
    input.fieldWrap = input.field !== '';
  input.type = input.type || 'button';
  input.btn = true;
  if (typeof input.icon === 'string') {
    input.icon = {
      name: input.icon
    };
  }
  console.log('ui-button ready', input);
  template.render(input, out);
};
