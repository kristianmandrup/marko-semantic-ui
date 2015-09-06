var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.tagName = input.link ? 'a' : 'div';
    console.log('ui-item', input);
    template.render(input, out);
};
