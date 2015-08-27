function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa,
      __renderer = __helpers.r,
      ______image_avatar_img_renderer_js = __renderer(require("../../image/avatar-img/renderer")),
      __tag = __helpers.t,
      ___comment_content_renderer_js = __renderer(require("../comment-content/renderer"));

  return function render(data, out) {
    out.w('<div class="comment ' +
      escapeXmlAttr(data.ui) +
      '">');

    if (data.avatar) {
      __tag(out,
        ______image_avatar_img_renderer_js,
        data.avatar);
    }

    if (data.content) {
      __tag(out,
        ___comment_content_renderer_js,
        data.content);
    }

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);