var statsd = require('statsd');
exports = module.exports = function () {
	return statsd();
}

exports['@singleton'] = true;
exports['@require'] = [];