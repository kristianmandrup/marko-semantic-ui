var template = require('./template.marko');

String.prototype.capitalizeFirst = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.humanize = function() {
  return this.replace(/[_-]/g, ' ')
    .replace(/(\w+)/g, function(match) {
      return match.charAt(0).toUpperCase() + match.slice(1);
    });
};

exports.renderer = function(input, out) {
  console.log('select-opt', input);
  input.label = (input.label || input.value).humanize();
  template.render(input, out);
};
