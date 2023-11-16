exports.onExecutePostLogin = async (event, api) => {
    const axios = require('axios');
    
    if (!event.user.app_metadata.store_data) {
  
    const url = 'https://btcpay.bitcoin-tx.com/api/v1/stores/' + event.user.app_metadata.store_hot + '/payment-methods/onchain/BTC/generate';
    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            'username': event.user.email,
            'password': event.secrets.PASS
        }
    };
    const data = JSON.stringify({ "passphrase": "", "accountNumber": 0, "savePrivateKeys": false, "importKeysToRPC": false, "wordList": "English", "wordCount": 12, "scriptPubKeyType": "Segwit" });
 
    var response = await axios.post(url, data, options);

     api.user.setAppMetadata("store_data", (response.data));

    }
  };
  