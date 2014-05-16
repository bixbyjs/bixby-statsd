var StatsD = require('node-statsd').StatsD;
exports = module.exports = function(settings, logger) {
	var config = settings.get('statsd') || {};
	if (! config.host) {throw new Error('StatsD host not set in config')}
	var host = config.host;
	var port = config.port || 8125;
	var client = new StatsD(config);
	return client;
}

exports['@singleton'] = true;
exports['@require'] = ['settings', 'logger'];