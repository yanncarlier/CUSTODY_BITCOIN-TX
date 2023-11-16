var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOmVSQ3NMVUxaeHFvQXIhMTI=', 
    'Cookie': '.AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wBqWybb2UGJrFTj91YDqELSUZhoI4rJHnDEGYjDmYFPNidshfkmdtbuMc6HrnLpIwIXvfIY2MeP4WhldUooRWkdUL5A-de-kTcqYHdrdYrJ8W6aLN0CdleledzFu4vgbGsvForTrmw50HVfD_JTif87nKwC8ETEztE9oPDhUEXiYSfTWHwIPwRc9SYlXdWgikCJFOtT_aiCRY5STQ4RBm9fP-_rNCpJ54I_FZe9W_BuHKs9nZdDT-8kmD-F5i0I5JFd4TbpzmJGcqSWFZucfFwmRL5elSZmuwT66Pq1sfsjNY3CXnqLQc4fVN8FNV-ER-oeh9c-3A5jGJ18FHac2igUTtNjEJF1X5t__8-jUSWbrXiq1J3wZMfh7IiMd48HJxjKMvnqfs5gQQMDLL1n-VoKsd9EpcvADIryFRBATF3nIpwlSMtmVWIT1yWIozf_iLsJq03Ss52XYFjgb81XGMlJtKlfTXWwws_pOCN1xP9IO7abgxY_J79pYS3oKwOir_UxTFA5ldtySuzXE0e3ZKFylCaPnJTVGGFB9dW9Cgj10NIiPZQP5YuNcArP8uev2fiX1C9kaKN6KlR4MAj2xUi5KAsC-17EvjIZ4JR0fx52SM6V8QPJefcohFa0MXhyz2bVtRmUdmcwZHSWC0fvuc4fLFRHUpyQBQnH3_FAE5NSWKcPI-tS1MxoDZdUbTDWq2TZTPj0RBIfPMxczGmjaigmqQkoXAaRZtxsfk2K9pRj80GDZiKhSX9W2ZP5-yabKKM'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});