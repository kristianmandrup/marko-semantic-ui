function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ___icon_btn_renderer_js = __renderer(require("../icon-btn/renderer")),
      __tag = __helpers.t,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    var __strip0 = !(data.list);

    if (__strip0) {
      out.w('<div class="ui icon ' +
        escapeXmlAttr(data.ui) +
        ' buttons">');
    }

    forEach(data.list, function(item) {
      __tag(out,
        ___icon_btn_renderer_js,
        item);
    });

    tagBody(out, data.renderBody);

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);