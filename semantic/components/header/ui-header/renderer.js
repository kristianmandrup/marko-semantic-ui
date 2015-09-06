var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.tagName = 'h' + (input.lv || 1);
  template.render(input, out);
};
