var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/KX4LJwCfrJx2mwTowYibn1aUDLkUxpcDSDpDTHGD4Gm/payment-methods/onchain/BTC/wallet/address?forceGenerate=true',
  headers: { 
    'Authorization': 'token 0de961281644995bfd69f7dd492ce35c90472fef', 
    'Cookie': 'UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%22KX4LJwCfrJx2mwTowYibn1aUDLkUxpcDSDpDTHGD4Gm%22%7D'
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
