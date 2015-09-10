var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.tagName = input.lv ? ('h' + input.lv) : 'div';
  template.render(input, out);
};
