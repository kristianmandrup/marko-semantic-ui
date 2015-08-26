function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      attr = __helpers.a;

  return function render(data, out) {
    var __strip0 = !(!data.ui);

    if (__strip0) {
      out.w('<div class="ui ' +
        escapeXmlAttr(data.ui) +
        ' ad">');
    }

    out.w('<ins style="display:block;"' +
      attr("data-ad-client", data.client) +
      attr("data-ad-slot", data.slot) +
      attr("data-ad-format", data.format) +
      ' class="adsbygoogle"></ins><script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');

    if (__strip0) {
      out.w('</div>');
    }
  };
}
(module.exports = require("marko").c(__filename)).c(create);