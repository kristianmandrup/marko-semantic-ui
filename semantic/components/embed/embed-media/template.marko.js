function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      attr = __helpers.a;

  return function render(data, out) {
    out.w('<div' +
      attr("data-source", data.type) +
      attr("data-id", data.id) +
      attr("data-icon", data.icon) +
      attr("data-placeholder", data.placeholder) +
      ' class="ui embed"></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);