function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ___main_menu_renderer_js = __renderer(require("../main-menu/renderer")),
      __tag = __helpers.t,
      ___session_menu_renderer_js = __renderer(require("../session-menu/renderer"));

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' large top fixed hidden menu">');

    if (data.main) {
      __tag(out,
        ___main_menu_renderer_js,
        $data.main);
    }

    if (data.session) {
      __tag(out,
        ___session_menu_renderer_js,
        $data.session);
    }

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);