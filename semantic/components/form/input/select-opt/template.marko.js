function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    if (data.selected) {
      out.w('<option' +
        attr("value", data.value) +
        ' selected>' +
        escapeXml(data.label) +
        '</option>');
    }
    else {
      out.w('<option' +
        attr("value", data.value) +
        '>' +
        escapeXml(data.label) +
        '</option>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);