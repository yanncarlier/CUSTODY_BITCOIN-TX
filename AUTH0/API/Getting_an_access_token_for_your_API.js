var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-2nyhi3gc.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"NhmT2XOCiFfiiZ7KhX5G5WNFgEpBCIt6","client_secret":"W8VuPXXwX3oszyVhhqQZ_kbAUXG3C_VulYraWF8XwCv1gVEBnod-r0JH-lfN6cvr","audience":"https://dev-2nyhi3gc.eu.auth0.com/api/v2/","grant_type":"client_credentials"}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});