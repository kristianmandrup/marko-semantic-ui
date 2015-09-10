function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<div class="item"><a' +
      attr("href", data.link) +
      ' class="ui logo icon image"><img' +
      attr("src", data.image) +
      '></a><a' +
      attr("href", data.link) +
      '><b>' +
      escapeXml(data.label) +
      '</b></a></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);