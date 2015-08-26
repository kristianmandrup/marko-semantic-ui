function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<button class="ui ' +
      escapeXmlAttr(data.ui) +
      ' button">' +
      escapeXml(data.label) +
      '</button>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);