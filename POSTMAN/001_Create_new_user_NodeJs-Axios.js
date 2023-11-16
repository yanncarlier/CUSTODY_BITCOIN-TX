var axios = require('axios');
var data = JSON.stringify({"email":"yanncarlier@gmail.com","password":"yanncarlier@gmail.com","isAdministrator":false});

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/users',
  headers: { 
    'Content-Type': 'application/json'
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
