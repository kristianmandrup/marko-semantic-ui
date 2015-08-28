var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.tagName = data.link ? 'a' : 'div';
    template.render(input, out);
};
