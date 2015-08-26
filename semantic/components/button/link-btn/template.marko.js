function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      tagBody = require("../../../../../../markoa/marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<a' +
      attr("href", data.link) +
      ' class="ui ' +
      escapeXmlAttr(data.ui) +
      ' button">');

    tagBody(out, undefined || data.renderBody);

    out.w('</a>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);