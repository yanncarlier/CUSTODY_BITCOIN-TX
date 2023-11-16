var axios = require('axios');
var data = JSON.stringify({"enabled":true,"derivationScheme":"2-of-xpub661MyMwAqRbcEqWoLXTppZ54ohxyEQqteneqZJhmrLnEnPe7qXa1mGBH9bXbUYVqHKjHWGEXEM7NRJQVVkqac5TYrLf6pLZTqwQWSUXViQB-xpub661MyMwAqRbcFscMzvxV8cMcir7yCs4qU5fmyAQ5EfruhPApJh3XhS5uDofdW739PwK5M8FrftHZi5PJTnLpjAWSxErJYhiB1U4sqLsM4K3-xpub661MyMwAqRbcF9GjFReH3mPmt4ARFFVNURLCLymc7uKU2j6osBspwXS4PfuoVNneNBfffhFSe8sVZD28r3Usywh5Yp2ZNZ9fEyaxkfyZeWH-[legacy]","label":"string","accountKeyPath":"abcd82a1/84'/0'/0'"});

var config = {
  method: 'put',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores/7G6QodPPGnqzi73ZrMZF7qHUyQKZycrCDrmMo881zGvH/payment-methods/onchain/BTC',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOmVSQ3NMVUxaeHFvQXIhMTI=', 
    'Content-Type': 'application/json', 
    'Cookie': '.AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wCS7Gic2XieG9BDDlhuZ3z7k8NpGXB6WC18rPQZ33Woc5X7KCZRD3couYAggZugFXSBo9fYQEgTxEWkR3vK6D3FKriyvouSw97izCCAjVlHUu3Gdcuui1zjAlwjo1-onOGLR1dbf9iw8iX9qZ10UhBBzZJzgYoaR18dBM0OC2Ogg300pFDCmIoiylQ4K1OWv3-IbifJIdhwY3ZBHY09u_D36Tp5PFixrgnUZpGd7Et6Q53MRi_RvapQi75fRSgMgN0VcBgtVuGByeDvpJwLH9_TVtEQMOJdD-0JWPfQFoy24S9kIAo2ZA6Q-ndfwA4c4AvQQuReBZ53V6vTdzwesIHMSqHEVkfsCZ1RsEJcK8PPRK5jCWSGh5VgEjkvwUR8ODmem7UeUN_IOls2cYyyT_JTOfe0JQm8fsuTnEOK9qSFnyUgIG-UlIOMwUdFeG7vO_v6SLDAxDW5RKemXyguEPVpmxgjBJnaNGVHOzeo6U7dbuiFWVlanyBHG5Sdyrs56JlKUfOpZozRi3FKmgYAN2V1w1Rg53AITvpUJ3xZzrBTpJA8lP1TOXexC3LwkDWRFDHsdlUQewUyKhqB0eL9FbK95fGMZ_IPgR9VrrkBhdUeH-wyY7iIMLelrZFPjluiWT--OiGIhehzQ5UQZgdOV0xU63Uz4mlkuNWVHIjC-8org5-Zt7v-Bh-bvnUzdCGmuqd9Xy1GxTICLJM9mq8MOj2OjCAZK7Oz0VVqJWV1xxaBTytwLEQ6vxA87nXPb_c1jhs'
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
