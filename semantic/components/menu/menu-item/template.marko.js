function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      renderer_js = __renderer(require("./renderer")),
      __tag = __helpers.t,
      ______image_ui_image_renderer_js = __renderer(require("../../image/ui-image/renderer")),
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      escapeXml = __helpers.x,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<' +
      data.tagName +
      attr("style", data.style) +
      ' class="' +
      escapeXmlAttr(data.ui) +
      ' item">');

    if (data.list) {
      out.w('<div class="menu">');

      forEach(data.list, function(item) {
        __tag(out,
          renderer_js,
          item);
      });

      out.w('</div>');
    }

    if (data.image) {
      __tag(out,
        ______image_ui_image_renderer_js,
        data.image);
    }

    if (data.icon) {
      __tag(out,
        ______icon_ui_icon_renderer_js,
        data.icon);
    }

    out.w(escapeXml(data.label));

    tagBody(out, data.content || data.renderBody);

    out.w('</' +
      data.tagName +
      '>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);