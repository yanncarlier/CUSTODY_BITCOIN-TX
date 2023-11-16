var axios = require('axios');
var data = JSON.stringify({"label":"string","permissions":["btcpay.store.canviewstoresettings:irXaHsUunrnECscXxn8Qm8cYB7ou83sQcYtUPy3kpjR"]});

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/api-keys',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOnlhbm5jYXJsaWVyQGdtYWlsLmNvbQ==', 
    'Content-Type': 'application/json', 
    'Cookie': '.AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wDZ2jaqEVr6w1u2-AlKnVxUpb_6eaviYm-ObySEvZwF33U8ozFC5ZUwqnaLMZoRyChmQKe3BvzXEAK3I4qaeUlRaOLgeParLI9zZtgcF0G0aNbt-XgdTIHK2I9BVWO1fwPryad4r1rp1uWTThBiT_xhh-z8kncrJscoMNXEHeS2mM8ELKn1qz0LmXTVPdIJSBxrJozWhn-7l9vh8D9_BiFH-DlVyKAVU5XUpbeq0h8paxUiSwnWmitvys7yBHc133M3dMZhvUcYXgXeTtg5Yf_xcDMszDIz9Kk1OB1VajYLJmBXVwr5apzz5wFL9chqj3fW8NF9HlLtQEWJo1f2hUPd1kvm4lLZiB8NDH1a1UoU99RUOLlmD1jgQZ4QmoG_sxLCOZZBTuNfEji-VCuE852dOdBK7I4NzejQkeSI5yYrYLCWN4vbabfkAWw5YmeELgztjvOgzaCyIXNp-qXoXKnbx24ce6uJGkdr28xGfGSrU9RWKxc1gLzeDkxnFkP8LfEHXWh5zjvtzdKyy-5iytCfJvpMkDohG72Q1qRevI_kB-G-IrYKRpyGQd02ZT4PwrJBGichKrXJwgnEN4L4KxjpTMi7-r59Vaax3XV97KVg1Y60PAOb8YT-dZT0SIv6ueMPNLngXyHgHKKBVFkURzBS-SRunqzayWYC2xlQzyF-nmcb2JG5kK4-zBp-0_HY7NldwUkeV58NEH38T0w5Ev915zIrxHV4YMPRLCGGZ-SqbuXPgYrFhFS3u88gTHthgsQ'
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
