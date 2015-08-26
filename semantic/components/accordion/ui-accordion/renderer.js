var template = require('./template.marko');

exports.renderer = function(input, out) {
    console.log('ui-accordion', input);
    template.render(input, out);
};
