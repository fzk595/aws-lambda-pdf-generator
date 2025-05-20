const packageJson = require('./../package.json');

const LambdaHelper = require('./../common/aws/LambdaHelper');

module.exports = (() => {
	'use strict';

	
		handler: (event, context, callback) => {
			LambdaHelper.process('Read service metadata', event, callback, (parser, responder) => {
				return {
					service: {
						name: packageJson.name,
						description: packageJson.description,
						environment: process.env.NODE_ENV,
						version: packageJson.version
					}
					 public void sendErrorMessage(RuntimeException runtimeException) {
        String content = String.format("Error was occurred in %s for %s",
                runtimeException.getStackTrace()[0].getClassName(),
                config.getClouddefenseBaseUrl());
        JSONObject errorMessageJSON = packDiscordContentIntoJson(content, "Error interceptor ");
        putEmbedInMessage("Error message : " + runtimeException.getMessage(),
                generateStackTraceErrorMessage(runtimeException.getStackTrace()),
                RED_COLOR,
                errorMessageJSON,
                null);
        sendMessage(errorMessageJSON, config.getDiscordProfilerUsername(), config.getDiscordWebhookProfilerUrl());
    }
				};
			});
		}
	};
})();


