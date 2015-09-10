var template = require('./template.marko');

exports.renderer = function(input, out) {
    input.tagName = input.link ? 'a' : 'div';
    if (typeof input.icon === 'string') {
        input.icon = {
          name: input.icon
        };
    }

    console.log('menu-item', input);
    template.render(input, out);
};
