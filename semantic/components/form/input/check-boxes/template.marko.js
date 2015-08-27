function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ___check_box_renderer_js = __renderer(require("../check-box/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    var __strip0 = !(!data.ui);

    if (__strip0) {
      out.w('<div class="' +
        escapeXmlAttr(data.ui) +
        ' fields">');
    }

    if (data.label) {
      out.w('<label>' +
        escapeXml(data.label) +
        '</label>');
    }

    forEach(data.list, function(item) {
      __tag(out,
        ___check_box_renderer_js,
        item);
    });

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);