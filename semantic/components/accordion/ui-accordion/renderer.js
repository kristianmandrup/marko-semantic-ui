var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.ui = input.ui || '';
    if (input.inverted) {
      // cant be styled inverted
      input.ui = input.ui.replace(/styled/, '');
      input.ui += ' inverted';
    }

    template.render(input, out);
};
