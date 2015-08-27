var template = require('./template.marko');

exports.renderer = function(input, out) {
  // console.log('icon group btn', input);
  template.render(input, out);
};
