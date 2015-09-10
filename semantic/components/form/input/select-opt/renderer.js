var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('select opt', input);
  input.label = input.label || input.value;
  template.render(input, out);
};
