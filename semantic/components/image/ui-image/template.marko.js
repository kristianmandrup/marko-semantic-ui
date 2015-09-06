function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    var __strip0 = !(!data.avatar);

    if (__strip0) {
      out.w('<a class="avatar">');
    }

    out.w('<img' +
      attr("src", data.src) +
      ' class="ui ' +
      escapeXmlAttr(data.ui) +
      ' image">');

    if (__strip0) {
      out.w('</a>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);