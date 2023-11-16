var axios = require('axios');
var data = JSON.stringify({"email":"carlier@gmail.com","subject":"string","body":"string"});

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/AnNZYXFvvy5VUWbK1UXRcoSHewAzAoWnKNvyNstjuCP1/email/send',
  headers: { 
    'Authorization': 'token d76cb40dadb476343839b4e7c6733902474ff63d', 
    'Content-Type': 'application/json', 
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  console.log(config);
})
.catch(function (error) {
  console.log(error);
});
