function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      forEach = __helpers.f,
      __renderer = __helpers.r,
      ______menu_sub_menu_renderer_js = __renderer(require("../../menu/sub-menu/renderer")),
      __tag = __helpers.t,
      __extend = __helpers.xt;

  return function render(data, out) {
    forEach(data.menus, function(item) {
      __tag(out,
        ______menu_sub_menu_renderer_js,
        __extend(__extend({}, item), {
          "sidebar": true
        }));
    });
  };
}
(module.exports = require("marko").c(__filename)).c(create);