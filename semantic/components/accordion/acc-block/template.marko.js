function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      __tag = __helpers.t,
      escapeXml = __helpers.x,
      tagBody = require("../../../../../../markoa/marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<div class="' +
      escapeXmlAttr(data.status) +
      ' title">');

    if (data.icon) {
      __tag(out,
        ______icon_ui_icon_renderer_js,
        data.icon);
    }

    out.w(escapeXml(data.label) +
      '</div><div class="' +
      escapeXmlAttr(data.status) +
      ' content"><p>');

    tagBody(out, undefined || data.renderBody);

    out.w('</p></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);