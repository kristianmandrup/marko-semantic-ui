var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.main = input.main || {};
  input.session = input.session || {};
  if (input.menu) {
    input.main.list = input.menu.main;
    input.session.list = input.menu.session;
  }
  // console.log('top', input);
  template.render(input, out);
};
