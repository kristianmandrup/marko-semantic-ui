var template = require('./template.marko');

exports.renderer = function(input, out) {
  input.list = input.list.map(function(item) {
    item.field = item.field || item.value;
    if (!item.label) {
      item.label = item.field;
      item.field = undefined;
    }
    item.field = input.field || 'inline';
    return item;
  });
  template.render(input, out);
};
