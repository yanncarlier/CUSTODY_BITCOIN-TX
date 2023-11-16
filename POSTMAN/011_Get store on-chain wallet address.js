var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/3xMbf3kQzkDMWtz5QjUEguDi4GqYt3ZJo2xcuoNv8L69/payment-methods/onchain/BTC/wallet/address?forceGenerate=true',
  headers: { 
    'Authorization': 'token 0e317684fd432028dde78e58f19f7346e62210fd', 
    },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
