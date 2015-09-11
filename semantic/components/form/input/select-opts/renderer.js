var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('select opts', input);

  // create hash list from String list if first item is a String
  if (typeof input.list[0] === 'string') {
    input.list = input.list.map(function(item) {
      return typeof item === 'string' ? {value: item} : item;
    });
  }
  template.render(input, out);
};
