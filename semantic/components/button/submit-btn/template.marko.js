function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___ui_btn_renderer_js = __renderer(require("../ui-btn/renderer")),
      __tag = __helpers.t,
      __extend = __helpers.xt;

  return function render(data, out) {
    __tag(out,
      ___ui_btn_renderer_js,
      __extend(__extend({}, data), {
        "type": "submit"
      }));
  };
}
(module.exports = require("marko").c(__filename)).c(create);