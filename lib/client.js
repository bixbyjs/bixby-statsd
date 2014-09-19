var StatsD = require('node-statsd').StatsD;
exports = module.exports = function(settings, logger) {
	var config = settings.toObject();
	if (! config.host) {throw new Error('StatsD host not set in config')}
	var host = config.host;
	var port = config.port || 8125;
	var client = new StatsD({host: host, port: port, prefix: config.prefix, suffix: config.suffix, mock: config.mock });
	client.socket.on('error', function (error) {
		logger.error("StatsD Error " + error);
	})
	return client;
}

exports['@singleton'] = true;
exports['@require'] = ['settings', 'logger'];