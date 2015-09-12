var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('extra-content', input);
  template.render(input, out);
};
