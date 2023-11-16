var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/',
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    'username': 'yanncarlier@gmail.com',
    'password': 'eRCsLULZxqoAr!12'
  },
};


axios(config)
  .then(function (response) {
    console.log("stores_id:", JSON.stringify(response.data[0].id));
    // api.user.setUserMetadata("stores_id", response.data[0].id);
    // api.user.setUserMetadata("favorite_color", "purple");.catch(function (error) {
  })
  .catch(function (error) {
    console.log(error);
  });
