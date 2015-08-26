// TODO: use path.join instead of +
var path = require('path');

var root = {
  components: 'semantic/components'
}

module.exports = {
  components: root.components,
  jade: path.join(root.components, '**/*.jade')
};
