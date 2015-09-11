var template = require('./template.marko');

exports.renderer = function(input, out) {
  console.log('ui-buttons', input);
  input.ui = input.ui || '';
  input.ui += input.icon ? ' icon' : '';

  if (input.or === 'true') {
    input.or = 'or';
  }

  if (input.list && typeof input.list[0] === 'string') {
    input.list = input.list.map(function (item) {
      var ui = '';
      if (input.positive === item) {
        ui = 'positive';
      }

      return {
        label: item,
        name: item,
        ui: ui
      };
    });
  }
  console.log('ui-buttons ready', input);
  template.render(input, out);
};
