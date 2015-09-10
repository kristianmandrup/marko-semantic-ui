function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ______item_logo_item_renderer_js = __renderer(require("../../item/logo-item/renderer")),
      __tag = __helpers.t,
      ___menu_item_renderer_js = __renderer(require("../menu-item/renderer")),
      tagBody = require("marko-tag-body/src/tag-body-helper");

  return function render(data, out) {
    out.w('<div class="' +
      escapeXmlAttr(data.ui) +
      ' menu">');

    forEach(data.list, function(item) {
      if (item.logo) {
        __tag(out,
          ______item_logo_item_renderer_js,
          item);
      }
      else {
        __tag(out,
          ___menu_item_renderer_js,
          item);
      }
    });

    tagBody(out, data.renderBody);

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);