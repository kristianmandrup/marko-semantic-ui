function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___check_toggle_renderer_js = __renderer(require("../check-toggle/renderer")),
      __tag = __helpers.t,
      ___check_slider_renderer_js = __renderer(require("../check-slider/renderer")),
      escapeXmlAttr = __helpers.xa,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    if (data.toggle) {
      __tag(out,
        ___check_toggle_renderer_js,
        data);
    }

    if (data.slider) {
      __tag(out,
        ___check_slider_renderer_js,
        data);
    }

    if (data.default) {
      var __strip0 = !(!data.field);

      if (__strip0) {
        out.w('<div class="' +
          escapeXmlAttr(data.field) +
          ' field">');
      }

      var __strip1 = !(!data.ui);

      if (__strip1) {
        out.w('<div class="ui ' +
          escapeXmlAttr(data.ui) +
          ' checkbox">');
      }

      out.w('<input type="checkbox"' +
        attr("name", data.name) +
        attr("checked", data.checked) +
        attr("tabindex", data.tab) +
        ' class="hidden">');

      if (data.label) {
        out.w('<label>' +
          escapeXml(data.label) +
          '</label>');
      }

      if (__strip1) {
        out.w('</div>');
      }

      if (__strip0) {
        out.w('</div>');
      }
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);