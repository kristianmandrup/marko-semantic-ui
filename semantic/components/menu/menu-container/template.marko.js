function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<div class="ui inverted vertical ' +
      escapeXmlAttr(data.ui) +
      ' segment"><div class="ui container">');

    tagBody(out, data.renderBody);

    out.w('</div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);