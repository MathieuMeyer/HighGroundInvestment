'use strict';
var https = require('https');

module.exports = function(Enterprise) {
    Enterprise.shares = function(symbol, cb) {
        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=compact&symbol=' + symbol + '&apikey=YEIGHQ3523QIVB95';

        https.get(url, function(res) {
            var body = '';
            res.on('data', (chunk) => { body += chunk; });
            res.on('end', () => {
                var webResponse = JSON.parse(body);
                cb(null, webResponse);
            });
        }).on('error', (e) => {
              console.log("Got an error: ", e);
              cb(null);
        });
    };
    
	Enterprise.remoteMethod(
    	'shares', {
            http: {path: '/:symbol/shares', verb: 'get'},
            
			accepts: [
                {arg: 'symbol', type: 'string', required: 'true'}
            ],
    		description: [
    			"Get the shares in order to create a visualization"
            ],
            returns: { arg: 'stocks', type: 'string' }
    	}
	);
};

