/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
      const axios = require('axios');
    
    //if (event.user.app_metadata.store_hard) {
  
    const url = 'https://btcpay.bitcoin-tx.com/api/v1/stores/' + event.user.app_metadata.store_hard + '/payment-methods/onchain/BTC';
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            'username': event.user.email,
            'password': event.secrets.PASS
        }
    };

  //const data = JSON.stringify({ "passphrase": "", "accountNumber": 0, "savePrivateKeys": false, "importKeysToRPC": false, "wordList": "English", "wordCount": 12, "scriptPubKeyType": "Segwit" });


    const data = JSON.stringify({ "enabled": true, "derivationScheme": "2-of-" + event.user.app_metadata.store_data.derivationScheme + "-" + event.secrets.ACCOUNTKEY1 + "-" + event.secrets.ACCOUNTKEY2 + "-" + event.secrets.ACCOUNTKEY3 + "-[legacy]", "label": "Multiple signatures Hard wallet", "accountKeyPath": "abcd82a1/84'/0'/0'" });


    var response = await axios.put(url, data, options);

     //api.user.setAppMetadata("store_data", (response.data));

    //}
};


/**
* Handler that will be invoked when this action is resuming after an external redirect. If your
* onExecutePostLogin function does not perform a redirect, this function can be safely ignored.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
// exports.onContinuePostLogin = async (event, api) => {
// };
