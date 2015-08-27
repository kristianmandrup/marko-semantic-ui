var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.ui = input.ui || '';
    input.ui += input.country || '';
    template.render(input, out);
};
