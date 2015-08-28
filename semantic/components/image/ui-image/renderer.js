var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.src = input.src || input.image;
  template.render(input, out);
};
