var template = require('./template.marko');

exports.renderer = function(input, out) {
  data.ui = data.ui || '';
  data.ui += data.image ? ' image' : '';
  data.tagName = data.image ? ' a' : 'div';
  template.render(input, out);
};
