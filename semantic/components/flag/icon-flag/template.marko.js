function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w('<i class="' +
      escapeXmlAttr(data.ui) +
      ' flag"></i>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);