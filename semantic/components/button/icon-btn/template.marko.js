function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___ui_btn_renderer_js = __renderer(require("../ui-btn/renderer")),
      __tag = __helpers.t,
      ______icon_ui_icon_renderer_js = __renderer(require("../../icon/ui-icon/renderer"));

  return function render(data, out) {
    __tag(out,
      ___ui_btn_renderer_js,
      data,
      function(out) {
        __tag(out,
          ______icon_ui_icon_renderer_js,
          data.icon);
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);