function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ___select_opts_renderer_js = __renderer(require("../select-opts/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    var __strip0 = !(!data.field);

    if (__strip0) {
      out.w('<div class="field">');
    }

    if (data.field) {
      out.w('<label>' +
        escapeXml(data.field) +
        '</label>');
    }

    out.w('<select' +
      attr("name", data.name) +
      ' multiple' +
      attr("tab-index", data.tab) +
      ' class="ui ' +
      escapeXmlAttr(data.ui) +
      ' dropdown">');
    __tag(out,
      ___select_opts_renderer_js,
      {
        "list": data.list
      });

    out.w('</select>');

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);