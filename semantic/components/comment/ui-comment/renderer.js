var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('comment', input);
  template.render(input, out);
};
