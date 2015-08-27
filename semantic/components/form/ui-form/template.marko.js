function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<form class="ui form">');

    tagBody(out, data.body || data.renderBody);

    out.w('</form>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);