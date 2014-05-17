var StatsD = require('node-statsd').StatsD;
exports = module.exports = function(settings, logger) {
	var config = settings.get('statsd') || {};
	if (! config.host) {throw new Error('StatsD host not set in config')}
	var host = config.host;
	var port = config.port || 8125;
	console.log("Config: " + config);
	var client = new StatsD({host: host, port: port});
	client.socket.on('error', function (error) {
		logger.error("StatsD Error " + error);
	})
	return client;
}

exports['@singleton'] = true;
exports['@require'] = ['settings', 'logger'];