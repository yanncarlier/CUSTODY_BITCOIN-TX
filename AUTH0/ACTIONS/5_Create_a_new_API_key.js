/**
* Handler that will be called during the execution of a PostLogin flow.
*
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
    var axios = require('axios');

   if (!event.user.app_metadata.api_key) {
      const url = 'https://btcpay.bitcoin-tx.com/api/v1/api-keys';
      const options = {
          headers: {
              'Content-Type': 'application/json'
          },
          auth: {
              'username': event.user.email,
              'password': event.secrets.PASS
          }
      };

      const data = JSON.stringify({ 'label':'string', 'permissions': ["btcpay.store.canmodifystoresettings"] });
      var response = await axios.post(url, data, options);
      api.user.setAppMetadata("api_key", (response.data.apiKey)); 
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
