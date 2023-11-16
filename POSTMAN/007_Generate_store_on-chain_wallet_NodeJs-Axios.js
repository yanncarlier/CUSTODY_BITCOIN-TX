var axios = require('axios');
var data = JSON.stringify({"passphrase":"","accountNumber":0,"savePrivateKeys":false,"importKeysToRPC":false,"wordList":"English","wordCount":12,"scriptPubKeyType":"Segwit"});

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR/payment-methods/onchain/BTC/generate',
  headers: { 
    'Authorization': 'token b9fcdfd8bc1c69b406e470c6d330643ecfe2b1a2', 
    'Content-Type': 'application/json', 
    'Cookie': 'UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%22irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR%22%7D; .AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wBN-ofZWTzt5vErhKJuw3m0tpT8BJsnCz0adcBDyVD8iBM9nD3cEgZYxMkrBDIOKLbgWpLO_aZpPde49so7_0EW3Mz01AQEYQ7ol4FFdwtFN5WEK7xBl79CDZpvHwXbvrLcBcSUs8ECKWASYoJiMfqLdTX8iRHOmXz0NbPwGM8WRrYcm1XW98UUupGG5KYIGsbJosuhV95nYY6H7eaiVCMpLe391g8io_ekxVsE8eK46Eh-9qxfXb4beGdq1fiBstLnF_OXg10JDOLIwzUybfLTB4cdJSMdJEhbzRXBXYYlk7EHuS__1WXpSPwnfk_hdWY0eQj4XLIZSA6nbxU3bZTtjb5ekgp5Kkk-T3Vn2dgwoJM3XRcW5E30pBsTEHfBLXOUKgFziRQMElE13xTQOTseZHo2sX1Tut97UV9wXpvkV-Vn8smXcFjixIGiJvExBBXLid6F3jEGPeTo69PxVcUxgpWt80rVfz8VF2QwgadEKX7W2xoRatJfba-Au4V23Q8RFa_gkyUYoJ5jE7yZdrsmlFHbkdvt8ICmBtnW9J8SnIrnG3Z5nFP1tI9M8gAPElfeCGwmKRPcJEkRUAGAM34eWV5Nbc_VUALtb3uSiq25RCB7JdjpHEfEdsNmS0IP4YFO26OzSoh0H0WBgIcxF049Ne9IkkOHwHui2IlDJTGvKfDbOd0zxT0BZkznHcZdUhuppZJUvYpaqdvAYCQ1IfUg_sQsGzdyT2XWAbgiZMR_mw'
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
