function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ___ui_field_renderer_js = __renderer(require("../ui-field/renderer")),
      __tag = __helpers.t,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<div class="' +
      escapeXmlAttr(data.ui) +
      ' fields">');

    if (data.list) {
      forEach(data.list, function(item) {
        __tag(out,
          ___ui_field_renderer_js,
          item);
      });
    }

    tagBody(out, data.renderBody);

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);