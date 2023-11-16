var axios = require('axios');
var data = '{\n  "id": "string",\n  "enabled": true,\n  "automaticRedelivery": true,\n  "url": "https://www.toptal.com/developers/postbin/1660731170857-9530656314454",\n  "authorizedEvents": {\n    "everything": true,\n  },\n  "secret": "string"\n}\n}\n\n\n\n';

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/7G6QodPPGnqzi73ZrMZF7qHUyQKZycrCDrmMo881zGvH/webhooks',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOmVSQ3NMVUxaeHFvQXIhMTI=', 
    'Content-Type': 'application/json', 
    'Cookie': 'UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%227G6QodPPGnqzi73ZrMZF7qHUyQKZycrCDrmMo881zGvH%22%7D; .AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wD09tm3w0fhGIj2juE2qpIGWpq89q_2Y2dGCKSQM_aePE2iiVwFcVTafD62To0gcuE68p8ARUfks2TIMS2k-x8NeJX39riZMYDnSiUsx5hWG02DHlC_Tri-gUHSCeVhZm8GL4FDBlUzm5qUTrR4wXtP3py57ejtpc4-ArnmsD7fRH83fV8iX51-u9FbV9xjslMwnt-322Muk1gim48qHJYL7-R9CdMe5m4lIfKtenZapCpKwaRySRwoU9TaUxN6RqNXrk4-1XiUS6r0vcjYzUW-ISS2XUsVTw4quyAj86QxbvYHlGgUN8592J5a58mxzLuB3u13sXSkjOzJzjS8aDzqvcZs6fn-mvlxmpzUZZ1-R8R3R2WQrAQ7qWN8uvS7ZS8XqYt6YBv8NIEtqCLWtW0tEpz-uxACxsJxn9XW_Kh3Axgq-9Hqph5C6gb6URgAJ7_dUPfe_YcLnyDBvDYyyFzXesaaWNHspA5vbWBqaduYl5f18HuVUb3p24ZvfCuNsb9hixt4i3AcNzNTvFp9M40-GUC4wAaaW7k5PIg5e-b4w7mYikF7M4f3eBMH7zWYtHDiEEyoC93cLdY8tzsAs08QqS3TOZyGXuap1eLAno-d7-fq_05X8AjFJvJ70z4UhKMF6zFhH2ekfCoxpXjDwbJPDd1NGjB-bDUuxOEesz80qC9xaPvKI9Ac8MImRvyAzL48swyf-SqTwCoVUKuJxJef3ZaRIkcMGyi06EaFScdHqecwIHYDq2E43fwOnEwMTGg'
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
