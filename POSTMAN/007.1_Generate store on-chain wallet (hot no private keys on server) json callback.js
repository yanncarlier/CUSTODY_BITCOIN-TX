var axios = require('axios');
var data = JSON.stringify({ "passphrase": "", "accountNumber": 0, "savePrivateKeys": false, "importKeysToRPC": false, "wordList": "English", "wordCount": 12, "scriptPubKeyType": "Segwit" });

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/FQyWzCuEdmXk1kswGM6qULmF9jAEwF3Sk8Yi8mBoJLRz/payment-methods/onchain/BTC/generate',
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    'username': 'yanncarlier@gmail.com',
    'password': 'eRCsLULZxqoAr!12'
  },
  data: data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
