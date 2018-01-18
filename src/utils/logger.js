/* Uncomment below line/s if you want to exclude the package from prod bundle */
// const methods = ['debug', 'log', 'info', 'warn', 'error']
// const LogDown = () => {}

export default (loggerName = 'design-framework') => {
	const logger = require('logdown')(loggerName)
	if (process.env.NODE_ENV === 'development' || process.env.NODE_DEBUG) {
		logger.state.isEnabled = true
	}

	return logger

	/* Use below if you want to exclude the package from prod bundle */
	// methods.forEach(function(method) {
	// 	LogDown[method] = function() {
	// 		return
	// 	}
	// })
	// return LogDown
}
