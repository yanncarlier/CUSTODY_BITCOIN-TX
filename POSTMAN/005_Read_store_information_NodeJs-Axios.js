var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOnlhbm5jYXJsaWVyQGdtYWlsLmNvbQ==', 
    'Cookie': '.AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wAKGz86qVuIzKMEZ5fzNbgavIsraSmDPxXu1Subywjy7oSeY6OPuw08Z2IhF1kLyRjviMLLW3ozXjIuAJhP16DbJbJQR6iGMYHXE6xiBVH-XFW6z9wgHMSoRcpribQcVPYCJKXa_owwIXcA4ggss8M8ytjrCfGMSXu42PSsengMD-RsGQaNwLgWrn7bbGeuN0iChzodhl167L3F3gJvS_1_1NVZf3TBACBa3exmn2CrIWEVW-RbKIRKwmdJiH0fzKLLVER5zBypWI17W9_q_WjbXRHqnLxd8bjc3vOM6ooxGhRTms5U4IHVsRVJlHy_0dqlsPHmzSnnNJKw16gaWb_QB4dSxhazwAa6Su5fRbvtR9xOhWEBQLlOLCusezNOIvkse5B7bBYfZ_qeN2uMqc-_bWKmXgBO03x_RG2DJIDIdsN7SZzbmiQ17WzZ1akaWtNsg8ISV38OQcC675lyuf64b4rCx80ZrQML_OSGlqE_epYSAXyDH_C7QzqJlCRwgeazodbwUMsBOQxEKw34aNK8B5na0BHugtMwk9G7tBXug_n_LfTWDOZPITecQAaP6Qkn3ZCuuFGK56F7ee2HQ2ujDuwJkLcQ5OXnE_lOdKnsGxaF5kODk1BokEhONY4cVJ9MlfzOKtpq1TKXKrPBCHMAa0XuEQY3JUmd8C0nNYxmlFbbUS_LNjns2NBYQd_oKdhin2ESUK-8Yr_xDRKdsHF3QrhxzxkEJxtZM76duJe735GAEooLDk5v2fPfGKk6PkA; UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%22irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR%22%7D'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
