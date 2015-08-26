function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      tagBody = require("../../../../../../markoa/marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    var __strip0 = !(!data.inverted);

    if (__strip0) {
      out.w('<div class="ui inverted segment">');
    }

    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' accordion">');

    tagBody(out, undefined || data.renderBody);

    out.w('</div>');

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);