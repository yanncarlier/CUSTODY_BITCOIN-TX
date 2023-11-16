var axios = require('axios');
var data = JSON.stringify({"offset":"","amount":"10"});

var config = {
  method: 'get',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR/payment-methods/OnChain/BTC/preview',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOnlhbm5jYXJsaWVyQGdtYWlsLmNvbQ==', 
    'Content-Type': 'application/json', 
    'Cookie': 'UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%22irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR%22%7D; .AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wCiODfwnWCNquMqDMOIGNoStMYflsV-5Fvv5LVMwh-B1xcy3tMY8qsykdUTjO4iGTQRPkUCp0qYH_H-BfO0QMN-kFU5n40QaBOW05RayFGguWXrXs3Baw7nAYid5j8oEEAmsrlDTOAbUUqcmXzTfFPffbVcmEeStUZA1-PTS1ZPAI4JVzjuB6RzOytCHsO0Fau7WRUF0puooE40U66b32ShJnKxpTiO3sIr6mQlXT_dj2JaY7vFhn8qFne0SB9EKGG70HlBJW1kFPUG9_F6amNN4TlaeGFDx6PrgNSQBCcPcTSqG2CdxhDbUIYAXxeTnrev-tGhNBaeU2GeG0sYTSCsyPK5mylkPSEpNf1IFqlYA-DViHLDdPNZUnbSF0IkDE8VQeSSZ6hJ9GvQASS6Bqc6aTkERqlv8hAB1RvSpXJgIw3ZlFmyzRZX0-FjPPKEG0YlnJvIs-1mqPZDhTxN0uhLyiD_9oEUVXbuGb549dhmG4Mo8yJFMOQ4xtswTRhkBiii-9MWet4nZU9Bgq3-R_nZtOwctQz2kiXaVQRHkFq5ift3CaSM309WnZAzYzq-v24IeEjrqx3aQs5eP01nE4iwEBR1s22-O46zgbGV2RR8S2AwTEuD9mdwOgHoXh1__ZXp6A4n_BGwFU_lGDuUuXDo3kDn-IGN2PvAVmDGRvqVFyTjhJHhQdHUteI3UcW-1cw1jnz7qMmei8h0a1HIMJOkYCrH3Jmt1DbIPcKQyEJ54jl2OVYYm_BrNzl1eClB1gc'
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
