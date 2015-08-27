var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.label = input.label || input.field;
    template.render(input, out);
};
