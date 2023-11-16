/**
* Handler that will be called during the execution of a PreUserRegistration flow.
*
* @param {Event} event - Details about the context and user that is attempting to register.
* @param {PreUserRegistrationAPI} api - Interface whose methods can be used to change the behavior of the signup.
*/
// Create a new store store_hot
exports.onExecutePreUserRegistration = async (event, api) => {

    var axios = require('axios');
    var data = JSON.stringify({ "name": "store_hard", "website": "https://app.bitcoin-tx.com", "defaultCurrency": "USD", "invoiceExpiration": 90, "monitoringExpiration": 90, "speedPolicy": "HighSpeed", "lightningDescriptionTemplate": "string", "paymentTolerance": 0, "anyoneCanCreateInvoice": false, "requiresRefundEmail": false, "receipt": { "enabled": true, "showQR": null, "showPayments": null }, "lightningAmountInSatoshi": false, "lightningPrivateRouteHints": false, "onChainWithLnInvoiceFallback": false, "redirectAutomatically": false, "showRecommendedFee": true, "recommendedFeeBlockTarget": 1, "defaultLang": "en", "customLogo": "", "customCSS": "", "htmlTitle": "", "networkFeeMode": "MultiplePaymentsOnly", "payJoinEnabled": false, "lazyPaymentMethods": false, "defaultPaymentMethod": "BTC" });

    var config = {
        method: 'post',
        url: 'https://btcpay.bitcoin-tx.com/api/v1/stores',
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            'username': event.user.email,
            'password': event.secrets.PASS
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });


};
