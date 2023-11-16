var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://dev-2nyhi3gc.eu.auth0.com/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'NhmT2XOCiFfiiZ7KhX5G5WNFgEpBCIt6',
    client_secret: 'W8VuPXXwX3oszyVhhqQZ_kbAUXG3C_VulYraWF8XwCv1gVEBnod-r0JH-lfN6cvr',
    audience: 'https://dev-2nyhi3gc.eu.auth0.com/api/v2/'
  })
};

axios.request(options).then(function (response) {
  console.log(response.data.access_token);
}).catch(function (error) {
  console.error(error);
});

