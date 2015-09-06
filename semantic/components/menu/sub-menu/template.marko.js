function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______item_ui_item_renderer_js = __renderer(require("../../item/ui-item/renderer")),
      __tag = __helpers.t,
      ______header_ui_header_renderer_js = __renderer(require("../../header/ui-header/renderer")),
      ___ui_menu_renderer_js = __renderer(require("../ui-menu/renderer"));

  return function render(data, out) {
    __tag(out,
      ______item_ui_item_renderer_js,
      {
        "ui": data.ui
      },
      function(out) {
        __tag(out,
          ______header_ui_header_renderer_js,
          $data.header);
        __tag(out,
          ___ui_menu_renderer_js,
          {
            "list": data.list
          });
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);