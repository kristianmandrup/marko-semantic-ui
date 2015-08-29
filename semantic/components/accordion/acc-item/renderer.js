var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.status = input.active ? 'active' : '';
    input.icon = input.icon || {name: 'dropdown'};
    template.render(input, out);
};
