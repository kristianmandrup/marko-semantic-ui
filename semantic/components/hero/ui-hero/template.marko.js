function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' text container"><h1 class="ui inverted header">' +
      escapeXml(data.title) +
      '</h1><h2>' +
      escapeXml(data.caption) +
      '</h2><div class="ui huge primary button">' +
      escapeXml(data.button) +
      '<i class="right arrow icon"></i></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);