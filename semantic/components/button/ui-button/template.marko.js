function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<button class="ui ' +
      escapeXmlAttr(data.ui) +
      ' button">');

    tagBody(out, data.renderBody || data.label);

    out.w('</button>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);