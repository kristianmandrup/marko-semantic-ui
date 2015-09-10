function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<' +
      data.tagName +
      ' class="ui ' +
      escapeXmlAttr(data.ui) +
      ' header">');

    tagBody(out, data.label || data.renderBody);

    out.w('</' +
      data.tagName +
      '>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);