var template = require('./template.marko');

exports.renderer = function(input, out) {
  // console.log('ui btn', input);
  input.type = input.type || 'button';
  template.render(input, out);
};
