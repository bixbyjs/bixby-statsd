exports = module.exports = function statsd(id) {
  var map = {
    'client': './client'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};