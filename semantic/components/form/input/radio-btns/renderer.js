var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.list = input.list.map(function(item) {
    item.name = input.name;
    return item;
  });
  template.render(input, out);
};
