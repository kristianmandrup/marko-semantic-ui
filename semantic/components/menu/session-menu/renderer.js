var template = require('./template.marko');

exports.renderer = function(input, out) {
    console.log('session-menu', input);  
    template.render(input, out);
};
