function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      attr = __helpers.a,
      __renderer = __helpers.r,
      ______label_ui_label_renderer_js = __renderer(require("../../label/ui-label/renderer")),
      __tag = __helpers.t,
      tagBody = require("marko-tag-body/src/tag-body-helper"),
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      escapeXml = __helpers.x;

  return function render(data, out) {
    var __strip0 = !(!data.fieldWrap);

    if (__strip0) {
      out.w('<div class="' +
        escapeXmlAttr(data.field) +
        ' field">');
    }

    if (data.link) {
      out.w('<a' +
        attr("href", data.link) +
        ' class="ui ' +
        escapeXmlAttr(data.ui) +
        ' button">');
      __tag(out,
        ______label_ui_label_renderer_js,
        data.link,
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
    else if (data.icon) {
      out.w('<button' +
        attr("type", data.type) +
        ' class="ui ' +
        escapeXmlAttr(data.ui) +
        ' button">');
      __tag(out,
        ______icon_ui_icon_renderer_js,
        data.icon);

      out.w(escapeXml(data.label));

      tagBody(out, data.renderBody);

      out.w('</button>');
    }
    else {
      out.w('<button' +
        attr("type", data.type) +
        ' class="ui ' +
        escapeXmlAttr(data.ui) +
        ' button">');
      __tag(out,
        ______label_ui_label_renderer_js,
        data);

      tagBody(out, data.renderBody);

      out.w('</button>');
    }

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);