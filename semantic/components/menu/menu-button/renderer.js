var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.transition = input.transition || 'overlay';
    input.label = input.label || 'Menu';
    template.render(input, out);
};
