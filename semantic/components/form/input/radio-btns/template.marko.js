function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ___radio_btn_renderer_js = __renderer(require("../radio-btn/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    var __strip0 = !(!data.ui);

    if (__strip0) {
      out.w('<div class="' +
        escapeXmlAttr(data.ui) +
        ' fields">');
    }

    forEach(data.list, function(item) {
      __tag(out,
        ___radio_btn_renderer_js,
        item);
    });

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);