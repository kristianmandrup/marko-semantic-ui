function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    var __strip0 = !(!data.field);

    if (__strip0) {
      out.w('<div class="' +
        escapeXmlAttr(data.field) +
        ' field">');
    }

    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' toggle checkbox"><input type="checkbox"' +
      attr("name", data.name) +
      attr("checked", data.checked) +
      attr("tabindex", data.tab) +
      ' class="hidden"><label>' +
      escapeXml(data.label) +
      '</label></div>');

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);