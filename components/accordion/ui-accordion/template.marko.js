function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' accordion">');

    if (data.renderBody) {
      data.renderBody(out);

    }

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);