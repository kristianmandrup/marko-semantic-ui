var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('sub menu', input);
  if (typeof input.header === 'string') {
    input.header = {
      label: input.header,
      ui: input.ui || input.color
    };
  }
  input.subcolor = input.subcolor || input.color;
  if (input.menu && input.subcolor) {
    input.menu = input.menu.map(function(item) {
      item.style = item.style || 'color:' + input.subcolor;
      return item;
    });
  }
  console.log('sub menu ready', input.menu);
  template.render(input, out);
};
