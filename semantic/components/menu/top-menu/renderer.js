var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.main = input.main || {};
  input.session = input.session || {};
  console.log('top-menu', input);
  input.menus = input.menus || input.menu;
  if (input.menus) {
    input.main = input.menus.main;
    input.session = input.menus.session;
  }
  console.log('top-menu ready', input);
  template.render(input, out);
};
