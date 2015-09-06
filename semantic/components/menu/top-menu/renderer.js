var template = require('./template.marko');

exports.renderer = function(input, out) {
    if (input.menu) {
      input.main = input.menu.main;
      input.session = input.menu.session;
    }
    template.render(input, out);
};
