function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      _________icon_ui_icon_renderer_js = __renderer(require("../../../icon/ui-icon/renderer")),
      __tag = __helpers.t,
      escapeXml = __helpers.x,
      _________menu_ui_menu_renderer_js = __renderer(require("../../../menu/ui-menu/renderer"));

  return function render(data, out) {
    var __strip0 = !(!data.fieldWrap);

    if (__strip0) {
      out.w('<div class="' +
        escapeXmlAttr(data.field) +
        ' field">');
    }

    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' floating dropdown labeled search icon button">');
    __tag(out,
      _________icon_ui_icon_renderer_js,
      data.icon);

    out.w('<span class="text">' +
      escapeXml(data.label) +
      '</span>');
    __tag(out,
      _________menu_ui_menu_renderer_js,
      {
        "list": data.list
      });

    out.w('</div>');

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);