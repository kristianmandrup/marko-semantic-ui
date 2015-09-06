function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      attrs = __helpers.as;

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' menu">');

    forEach(data.list, function(item) {
      out.w('<div class="item"><link-button' +
        attrs(item) +
        '></link-button></div>');
    });

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);