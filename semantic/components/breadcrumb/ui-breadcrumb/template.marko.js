function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      __tag = __helpers.t,
      __extend = __helpers.xt,
      tagBody = require("../../../../../../markoa/marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' breadcrumb">');

    forEach(data.list, function(item) {
      out.w('<a class="' +
        escapeXmlAttr(item.ui) +
        ' section">' +
        escapeXml(item.label) +
        '</a>');

      if (item.icon) {
        __tag(out,
          ______icon_ui_icon_renderer_js,
          __extend(__extend({}, item.icon), {
            "ui": "divider right"
          }));
      }

      if (!item.icon) {
        out.w('<div class="divider"> ');

        tagBody(out, item.body || "/");

        out.w('</div>');
      }
    });

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);