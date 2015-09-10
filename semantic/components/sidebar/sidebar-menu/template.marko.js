function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___sidebar_menu_container_renderer_js = __renderer(require("../sidebar-menu-container/renderer")),
      __tag = __helpers.t,
      ___sidebar_menus_renderer_js = __renderer(require("../sidebar-menus/renderer"));

  return function render(data, out) {
    __tag(out,
      ___sidebar_menu_container_renderer_js,
      {
        "ui": data.ui
      },
      function(out) {
        __tag(out,
          ___sidebar_menus_renderer_js,
          {
            "menus": data.menus
          });
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);