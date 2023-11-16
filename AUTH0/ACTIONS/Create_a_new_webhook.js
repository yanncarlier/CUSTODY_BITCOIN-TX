const axios = require('axios');
/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {


    if (event.user.app_metadata.store_hot) {

    const url = 'https://btcpay.bitcoin-tx.com/api/v1/stores/' + event.user.app_metadata.store_hot + '/webhooks';

    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            'username': event.user.email,
            'password': event.secrets.PASS
        }
    };
    const data = JSON.stringify({ "id": "string", "enabled": true, "automaticRedelivery": true, "url": "https://www.toptal.com/developers/postbin/1660745343071-8517442182637", "authorizedEvents": { "everything": true, }, "secret": "string" });

    var response = await axios.post(url, data, options);

    }

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


