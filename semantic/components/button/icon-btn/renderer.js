var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.icon = input.icon || {};
  input.icon.name = input.icon.name || input.name;
  template.render(input, out);
};
