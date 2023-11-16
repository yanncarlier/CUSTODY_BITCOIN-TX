var axios = require('axios');

var config = {
  method: 'delete',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/api-keys/5a9c4b3d6a83a67909151fd1a572844b184c955d',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOnlhbm5jYXJsaWVyQGdtYWlsLmNvbQ==', 
    'Cookie': 'UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%22irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR%22%7D; .AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wDmMxKekmyTQUJPA5lMs-7MR-AC9mROC1d7ci5Ut25p-X8FI0MCs0dmVa3lgOnd6Qs5Mj5XBtW2hX2A_JrEsUWtWPnPXeEqiU8NY5O5-D5YPiwiuIOr152DIVqCC4dxbWDLF_HypGRHxAnXAVx7xGgXNSSsb9OEYuTp4csx3j1iNfHP3MYH8a1MLoXRG91HC1RSLhrvELiYJH8fX30F5nLgILsOSVKoQoE03gtUU99B_gDEjkMM6gubtAt31a5q36_-P_MWU-_xZRdh5xxcejpVHn9Qjo2fSNMu-PAKBDmbOw5etwxX9Yh1TXENPCLKHjuCGu3HHj0F0LwKmxY3iSVrYbEg531UP0GwPbqVp6EQO20BdUm2ztqUwHKQyoM7NrIKfXQ_1LZyrSQzUGcT4hZu9apBkJRc25Go3eFiI5iC5TiESvzlQgI-VlOBn9xAcjK9AR6onTVpG9HXDp9XbD5mMlWhOmSedsO3tuQTicATIB_dK_sVVAIGoeVqFXgtcT9BD4qpjR3ek_Yk4XP9f4yFrOIsY2nSIGTwmYyy0Y3vjeNC7I-7jcNIkc3t5oa5OeztCk7YzRrj31XVeh9Dm8DkDlWI_8fde2jvN2Smbd5UUBCzHha9F8IaUZ6vQHqf9kdHWbxx59iXGCkEEMcm4U6YgUQWcmp8wPp5OyCZB_kg2HR3RzELehT2ziqHO4N0C0LB6qk2q_OfBzZahmCBy4ECZbx4dqOXoAFx2NpS6yTaCT4RodP1CXiDJGygK4GRus8'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
