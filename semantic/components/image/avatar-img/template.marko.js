function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___ui_image_renderer_js = __renderer(require("../ui-image/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<a class="avatar">');
    __tag(out,
      ___ui_image_renderer_js,
      data);

    out.w('</a>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);