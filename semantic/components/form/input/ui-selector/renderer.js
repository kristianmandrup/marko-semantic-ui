var template = require('./template.marko');

exports.renderer = function(input, out) {
  if (!input.fieldWrap && input.field)
    input.fieldWrap = input.field || input.field !== '';

  input.refList = input.refList || [];
  var refs = input.refList.map(function (item) {
    return item.value;
  })
  input.selectOpts = input.refList.map(function(item) {
    var option = item;
    option.selected = refs.indexOf(item) >= 0;
    return option;
  });

  template.render(input, out);
};
