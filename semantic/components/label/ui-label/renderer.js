var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.ui = input.ui || '';
  input.ui += input.image ? ' image' : '';
  input.tagName = input.image ? ' a' : 'div';
  template.render(input, out);
};
