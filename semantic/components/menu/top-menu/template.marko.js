function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ___main_menu_renderer_js = __renderer(require("../main-menu/renderer")),
      __tag = __helpers.t,
      forEach = __helpers.f,
      attr = __helpers.a,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<div class="ui ' +
      escapeXmlAttr(data.ui) +
      ' large secondary inverted pointing menu"><a class="toc item"><i class="sidebar icon"></i></a>');

    if (data.main) {
      __tag(out,
        ___main_menu_renderer_js,
        {
          "menu": data.main
        });
    }

    if (data.session) {
      out.w('<div class="right item">');

      forEach(data.session, function(item) {
        out.w('<a' +
          attr("href", item.link) +
          ' class="ui inverted button">' +
          escapeXml(item.label) +
          '</a>');
      });

      out.w('</div>');
    }

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);