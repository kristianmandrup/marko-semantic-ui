function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ______label_ui_label_renderer_js = __renderer(require("../../label/ui-label/renderer")),
      __tag = __helpers.t,
      tagBody = require("marko-tag-body/src/tag-body-helper"),
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer"));

  return function render(data, out) {
    if (data.link) {
      out.w('<a' +
        attr("href", data.link) +
        ' class="ui ' +
        escapeXmlAttr(data.ui) +
        ' button">');
      __tag(out,
        ______label_ui_label_renderer_js,
        data,
        function(out) {
          out.w(' ');
        });

      tagBody(out, data.label || data.renderBody);

      out.w('</a>');
    }
    else if (data.animated) {
      out.w('<div class="ui ' +
        escapeXmlAttr(data.ui) +
        ' animated button"><div class="visible content"> ');

      tagBody(out, data.label || data.renderBody);

      out.w('</div><div class="hidden content">');
      __tag(out,
        ______icon_ui_icon_renderer_js,
        data.icon);

      out.w('</div></div>');
    }
    else {
      out.w('<button' +
        attr("type", data.type) +
        ' class="ui ' +
        escapeXmlAttr(data.ui) +
        ' button">');
      __tag(out,
        ______label_ui_label_renderer_js,
        data,
        function(out) {
          out.w(' ');
        });

      tagBody(out, data.renderBody || data.label);

      out.w('</button>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);