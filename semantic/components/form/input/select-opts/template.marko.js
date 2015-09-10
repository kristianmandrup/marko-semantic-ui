function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    forEach(data.list, function(item) {
      if (item.isSelected) {
        out.w('<option' +
          attr("value", item.value) +
          ' selected>' +
          escapeXml(item.label) +
          '</option>');
      }
      else {
        out.w('<option' +
          attr("value", item.value) +
          '>' +
          escapeXml(item.label) +
          '</option>');
      }
    });
  };
}
(module.exports = require("marko").c(__filename)).c(create);