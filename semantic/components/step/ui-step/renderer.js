var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.tag = input.type == 'link' ? 'a' : 'div';
  template.render(input, out);
};
