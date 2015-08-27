var template = require('./template.marko');

exports.renderer = function(input, out) {
  // console.log('icon-btn input', input);
  template.render(input, out);
};
