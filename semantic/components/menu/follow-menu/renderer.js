var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('follow-menu', input);
  input.main = input.main || {};
  input.session = input.session || {};
  input.menus = input.menus || input.menu;
  if (input.menus) {
    input.main = input.menus.main;
    input.session = input.menus.session;
  }
  // console.log('top', input);
  template.render(input, out);
};
