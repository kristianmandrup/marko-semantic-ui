function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      escapeXml = __helpers.x,
      __renderer = __helpers.r,
      ______image_ui_image_renderer_js = __renderer(require("../../image/ui-image/renderer")),
      __tag = __helpers.t,
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer")),
      attr = __helpers.a,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<' +
      data.tagName +
      ' class="' +
      escapeXmlAttr(data.ui) +
      ' item">');

    if (data.list || data.dropdown) {
      out.w('<i class="dropdown icon"></i>');

      if (data.list) {
        out.w('<div class="menu">');

        forEach(data.list, function(item) {
          out.w('<div class="item">' +
            escapeXml(item.label) +
            '</div>');
        });

        out.w('</div>');
      }
    }

    if (data.label) {
      out.w('<div class="label">' +
        escapeXml(data.label) +
        '</div>');
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

    if (data.content) {
      out.w('<div class="content">');

      if (data.link) {
        out.w('<a' +
          attr("href", data.link.url) +
          '>' +
          escapeXml(data.link.label || data.link.url) +
          '</a>');
      }

      if (!data.link) {
        out.w('<a class="header">' +
          escapeXml(data.header) +
          '</a>');
      }

      if (data.desc) {
        out.w('<div class="description">' +
          escapeXml(data.desc) +
          '</div>');
      }

      out.w('</div>');
    }

    tagBody(out, data.content || data.renderBody);

    out.w('</' +
      data.tagName +
      '>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);