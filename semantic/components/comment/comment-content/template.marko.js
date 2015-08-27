function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      attr = __helpers.a,
      tagBody = require("marko-tag-body/src/tag-body-helper"),
      forEach = __helpers.f;

  return function render(data, out) {
    out.w('<div class="content">');

    if (data.author) {
      out.w('<a class="author">' +
        escapeXml(data.author) +
        '</a>');
    }

    if (data.meta) {
      out.w('<div class="metadata"><span' +
        attr("class", data.meta.ui) +
        '>' +
        escapeXml(data.meta.label) +
        '</span></div>');
    }

    out.w('<div class="text">');

    tagBody(out, data.text || data.renderBody);

    out.w('</div>');

    if (data.actions) {
      out.w('<div class="actions">');

      forEach(data.actions, function(action) {
        out.w('<a' +
          attr("class", action.ui) +
          '>' +
          escapeXml(action.label) +
          '</a>');
      });

      out.w('</div>');
    }

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);