function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      attr = __helpers.a;

  return function render(data, out) {
    var __strip0 = !(!data.ui);

    if (__strip0) {
      out.w('<div class="ui ' +
        escapeXmlAttr(data.ui) +
        ' input">');
    }

    out.w('<input' +
      attr("type", data.type) +
      attr("value", data.value) +
      attr("name", data.name) +
      attr("placeholder", data.placeholder) +
      attr("tab-index", data.tab) +
      '>');

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);