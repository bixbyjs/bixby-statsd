exports = module.exports = function statsd(id) {
  var map = {
    'client': './client'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.scope = function (id, obj, $scope) {
  if (id == 'settings') {
    var prefix = 'statsd';
    if ($scope.options && $scope.options['#']) {
      prefix = $scope.options['#'];
    } else if ($scope.prefix != '/') {
     prefix = $scope.prefix;
    }
    return obj.isolate(prefix);
  }
  return obj;
}
