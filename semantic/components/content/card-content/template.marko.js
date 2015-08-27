function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ______icon_ui_icons_renderer_js = __renderer(require("../../icon/ui-icons/renderer")),
      __tag = __helpers.t,
      escapeXml = __helpers.x,
      attrs = __helpers.as;

  return function render(data, out) {
    out.w('<div class="' +
      escapeXmlAttr(data.ui) +
      ' content">');

    if (data.icons) {
      __tag(out,
        ______icon_ui_icons_renderer_js,
        {
          "list": $data.icons
        });
    }

    if (data.header) {
      out.w('<div class="header">' +
        escapeXml(data.header) +
        '</div>');
    }

    if (data.data) {
      out.w('<div class="meta"><span class="date">' +
        escapeXml(data.date) +
        '</span></div>');
    }

    if (data.desc) {
      out.w('<div class="description">' +
        escapeXml(data.desc) +
        '</div>');
    }

    if (data.btn) {
      out.w('<ui-button' +
        attrs(data.btn) +
        '></ui-button>');
    }

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);