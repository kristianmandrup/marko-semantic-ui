function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ______image_ui_image_renderer_js = __renderer(require("../../image/ui-image/renderer")),
      __tag = __helpers.t,
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      __extend = __helpers.xt;

  return function render(data, out) {
    out.w('<' +
      data.tagName +
      ' class="' +
      escapeXmlAttr(data.ui) +
      ' ui label">');

    if (data.image) {
      __tag(out,
        ______image_ui_image_renderer_js,
        data.image);
    }

    if (data.icon) {
      __tag(out,
        ______icon_ui_icon_renderer_js,
        __extend(__extend({}, data.icon), {
          "label": data.label
        }));
    }

    out.w('</' +
      data.tagName +
      '>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);