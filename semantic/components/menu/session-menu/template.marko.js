function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' right menu">');

    forEach(data.list, function(item) {
      out.w('<div class="item"><a' +
        attr("href", item.link) +
        ' class="ui button">' +
        escapeXml(item.label) +
        '</a></div>');
    });

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);