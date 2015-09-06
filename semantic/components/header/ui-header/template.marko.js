function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<dynamic' +
      attr("tag-name", data.lv || 1) +
      ' class="ui header">');

    tagBody(out, data.label || data.renderBody);

    out.w('</dynamic>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);