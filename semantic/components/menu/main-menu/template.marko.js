function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ______item_link_item_renderer_js = __renderer(require("../../item/link-item/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    forEach(data.menu, function(item) {
      __tag(out,
        ______item_link_item_renderer_js,
        item);
    });
  };
}
(module.exports = require("marko").c(__filename)).c(create);