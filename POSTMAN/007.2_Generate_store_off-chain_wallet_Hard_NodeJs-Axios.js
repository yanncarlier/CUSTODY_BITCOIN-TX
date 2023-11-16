var axios = require('axios');
var data = JSON.stringify({"enabled":true,"derivationScheme":"zpub6rGxU2Jf7ZiKL6e1ZYsQyHho7XCz2tr3Q532VZCbMnjwJy1qT6j2VKN1FAJhKCdJJWAoV5keLBaEtiaKbdqnkeGZn2cV4CVD4EPZ59nzSQL","label":"string","accountKeyPath":"abcd82a1/84'/0'/0'"});

var config = {
  method: 'put',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR/payment-methods/onchain/BTC',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOnlhbm5jYXJsaWVyQGdtYWlsLmNvbQ==', 
    'Content-Type': 'application/json', 
    'Cookie': 'UserPrefsCookie=%7B%22InvoicesQuery%22%3Anull%2C%22PaymentRequestsQuery%22%3Anull%2C%22UsersQuery%22%3Anull%2C%22PayoutsQuery%22%3Anull%2C%22PullPaymentsQuery%22%3Anull%2C%22CurrentStoreId%22%3A%22irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR%22%7D; .AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wAlWRSRO_1m9-61WoBFn8YyfrHpwTWbEPrdp43yALrCBq1-9ibpgm3EG87rUGzSFTV00rqIZcBK6DC31Zwl-gONhGwrFwRSD4l7pVSFPfUUKxUGhyI2hMDFCE7IHZVI7x79OOcj-FpzVH81BY2nd81095lkVrHjmyN_nXU6deVWjJqmF985YSPky07C1qw3fnz4nz9TZ0Qpy62M4TElXZpSnLZcMA9r4r4Ty2JkdF7b1x0Z3JurCFRJUCXizvJ_z5Cn-eqgE8ZYCGeFjXWI5g1WrMl7I3mIb5U-1x1fj0p8s-JpQ40Pe_LeLQrzeY72_7w0zTNkTv9HslMSpRkCEAQjl1FdxnYXrpv-KI8RYGfm7QpEfwyUmc1FmHdffZk1yrwqiwxu3msEo7XrzftYUDMpccPF6e5GPPb5dNkZ8It2u2PVliacR6fbyqQSqlzu2QlvWWTVN5Ad26nRaSzYLp2cSfcLnnGKj1YVSJhG5cIDvcQe-nxRM5QWJleQfuRuvd4p98fKO4J0gGzKsYo2b5fm64Z0fbki3-5fD7oBoRcNLl_qV2Pi5KgClYSQX0uDaNd8AvFzTL3tbMl8aXflNDXZe5CSc7IoEyV76wKAqY8pFrh0seXd66kOIM5gdaewwH99m2HvVm7qYWdJHPAGvtPBtLr3-ZVZ6pVcSP916lDpbWnWI1bj6mcNIzim8mSi4I-rBTQio7-QHiluJhjr9kC5zKfV70G_26EChj32qMenVpQeWE1cAzXgz3CR1w_cQ3g'
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
