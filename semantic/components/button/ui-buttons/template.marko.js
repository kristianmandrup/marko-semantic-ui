function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEachWithStatusVar = __helpers.fv,
      __renderer = __helpers.r,
      ___ui_button_renderer_js = __renderer(require("../ui-button/renderer")),
      __tag = __helpers.t,
      attr = __helpers.a,
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' buttons">');

    forEachWithStatusVar(data.list, function(item,loop) {
      __tag(out,
        ___ui_button_renderer_js,
        item);

      if (data.or && !loop.isLast()) {
        out.w('<div' +
          attr("data-text", data.or) +
          ' class="or"></div>');
      }
    });

    tagBody(out, data.renderBody);

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);