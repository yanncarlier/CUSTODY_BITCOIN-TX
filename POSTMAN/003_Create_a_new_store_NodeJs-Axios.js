var axios = require('axios');
var data = JSON.stringify({"name":"string","website":"https://app.bitcoin-tx.com","defaultCurrency":"USD","invoiceExpiration":90,"monitoringExpiration":90,"speedPolicy":"HighSpeed","lightningDescriptionTemplate":"string","paymentTolerance":0,"anyoneCanCreateInvoice":false,"requiresRefundEmail":false,"receipt":{"enabled":true,"showQR":null,"showPayments":null},"lightningAmountInSatoshi":false,"lightningPrivateRouteHints":false,"onChainWithLnInvoiceFallback":false,"redirectAutomatically":false,"showRecommendedFee":true,"recommendedFeeBlockTarget":1,"defaultLang":"en","customLogo":"string","customCSS":"string","htmlTitle":"string","networkFeeMode":"MultiplePaymentsOnly","payJoinEnabled":false,"lazyPaymentMethods":false,"defaultPaymentMethod":"BTC"});

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/stores',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOnlhbm5jYXJsaWVyQGdtYWlsLmNvbQ==', 
    'Content-Type': 'application/json', 
    'Cookie': '.AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wASby9ZKsXCfcsj6RgEGfO7-9lXJN2t7tOtSW6DIDc8fVuvq0X2IXHIAZ4qhbvEl6xMqW54331uqObQCcoUSqHaxX7PkEO-Nby5X2zQtfHj5XYr2AGqgV4gm3Iw3SpjjEKnGZj0RPYsQSsUo0_lJ9Jnk0M8xkuDFcMcc_-q7_7w3keafg7WER8PzqhD2BBeXJfrzC3W2j9llctrTqHraS-TsqYeYba0b75zU8ohg96kxGBp7jAocZzW64fIV4FKVBtOS8VDU0gv16LMWyo4kdjTDe4j-uXBJS2mfAPcf2n7jMmam1jEgb3KI70PvYhy4nz80zFXAQL7DPkeKI_va8mnKBO2d3pIj9G94AyhgWbLFbHYlFY9xIMtTDewEEA3mAV9g2NsXlfpCEkXPjS_lu3ozE_ytArZbaYh0OZs6QJbZDSpq7z7Q9VHvQ1tyIZXlETfG2M7nico2-IVKrEnsuQoXoM35py38CZ1RASWH2ymjIzJeH45Wu2ca3bpr8FUhAN0N62Xfb7l3UOiuk3a5okab1iZCwCzCNEaenOxYQsPyv456qPH-rNxnGVIFxp6EAaM94z01Ukw5UysGhAIRcx4iURApqrhQEszCTjDYmH0dTZuEhMrFTw1Lty_MDh6AW1vzVRLkpl8uIoSsAVPKSJN1QKC1qP37YXMDt0pN6piPotSz_Ga45ecpuWWQj0R7GxX_7skzRWTwRWA6RooAeQyHLbYjG5sI-KuB8G3J3lEzLlVwOQ1dIwq14rSNFAibGI'
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
