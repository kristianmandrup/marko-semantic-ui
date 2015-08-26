function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    if (data.tip) {
      out.w('<i' +
        attr("data-content", data.tip) +
        ' class="' +
        escapeXmlAttr(data.ui) +
        ' ' +
        escapeXmlAttr(data.name) +
        ' icon"></i>');
    }
    else {
      out.w('<i class="' +
        escapeXmlAttr(data.ui) +
        ' ' +
        escapeXmlAttr(data.name) +
        ' icon"></i>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);