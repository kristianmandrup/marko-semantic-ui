function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ______image_ui_image_renderer_js = __renderer(require("../../image/ui-image/renderer")),
      __tag = __helpers.t,
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      escapeXml = __helpers.x,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    var __strip0 = !(data.btn);

    if (__strip0) {
      out.w('<dynamic' +
        attr("tag-name", data.tagName) +
        ' class="' +
        escapeXmlAttr(data.ui) +
        ' ui label">');
    }

    if (data.image) {
      __tag(out,
        ______image_ui_image_renderer_js,
        data.image);
    }
    else {
      __tag(out,
        ______icon_ui_icon_renderer_js,
        data.icon,
        function(out) {
          out.w(escapeXml(data.label));
        });
    }

    tagBody(out, data.renderBody);

    if (__strip0) {
      out.w('</dynamic>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);