function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______button_ui_button_renderer_js = __renderer(require("../../button/ui-button/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    __tag(out,
      ______button_ui_button_renderer_js,
      {
        "ui": data.ui+" launch right attached fixed",
        "icon": "content",
        "label": data.label,
        "transition": data.transition
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);